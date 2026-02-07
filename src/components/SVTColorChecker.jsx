import { useState, useRef } from 'react';
import { RotateCcw, CheckCircle2, AlertTriangle, XCircle, Info, Camera, Loader2 } from 'lucide-react';
import { svtParameters, svtInterpretationGuide } from '../data/svtColorData';
import ColorDropdown from './ColorDropdown';

function compressImage(file, maxSize = 1024, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let { width, height } = img;
        if (width > maxSize || height > maxSize) {
          const ratio = Math.min(maxSize / width, maxSize / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const base64 = canvas.toDataURL('image/jpeg', quality);
        resolve(base64);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export default function SVTColorChecker() {
  const [selections, setSelections] = useState({});
  const [showReference, setShowReference] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanError, setScanError] = useState(null);
  const [scanConfidence, setScanConfidence] = useState(null);
  const fileInputRef = useRef(null);

  const handleSelect = (paramId, colorValue) => {
    setSelections((prev) => ({ ...prev, [paramId]: colorValue }));
    // Clear confidence badge for manually changed parameter
    if (scanConfidence) {
      setScanConfidence((prev) => {
        const next = { ...prev };
        delete next[paramId];
        return Object.keys(next).length > 0 ? next : null;
      });
    }
  };

  const reset = () => {
    setSelections({});
    setScanError(null);
    setScanConfidence(null);
  };

  const getSelectedColor = (paramId) => {
    const param = svtParameters.find((p) => p.id === paramId);
    return param?.colors.find((c) => c.value === selections[paramId]);
  };

  const getOverallResult = () => {
    const selected = Object.keys(selections);
    if (selected.length === 0) return null;

    const results = selected.map((paramId) => getSelectedColor(paramId)?.result);
    const hasAbnormal = results.includes('Abnormal');
    const allNormal = results.every((r) => r === 'Normal');

    if (allNormal && selected.length === svtParameters.length) return svtInterpretationGuide.normal;
    if (hasAbnormal) return svtInterpretationGuide.abnormal;
    if (selected.length < svtParameters.length) return svtInterpretationGuide.mixed;
    return svtInterpretationGuide.normal;
  };

  const handleCameraCapture = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset the input so the same file can be re-selected
    e.target.value = '';

    setScanning(true);
    setScanError(null);
    setScanConfidence(null);

    try {
      const base64 = await compressImage(file);

      const response = await fetch('/api/vision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64 }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to analyze image');
      }

      const data = await response.json();
      const { results } = data;

      if (!results || typeof results !== 'object') {
        throw new Error('Invalid response from vision API');
      }

      // Auto-populate selections and track confidence
      const newSelections = { ...selections };
      const newConfidence = {};
      let hasLowConfidence = false;
      const undetected = [];

      for (const param of svtParameters) {
        const result = results[param.id];
        if (result && result.value !== null) {
          // Verify the value exists in this parameter's color options
          const validColor = param.colors.find((c) => c.value === result.value);
          if (validColor) {
            newSelections[param.id] = result.value;
            if (result.confidence && result.confidence !== 'high') {
              newConfidence[param.id] = result.confidence;
              if (result.confidence === 'low') hasLowConfidence = true;
            }
          } else {
            undetected.push(param.name);
          }
        } else {
          undetected.push(param.name);
        }
      }

      setSelections(newSelections);
      if (Object.keys(newConfidence).length > 0) {
        setScanConfidence(newConfidence);
      }

      if (undetected.length > 0) {
        setScanError(`Could not detect: ${undetected.join(', ')}. Please select manually.`);
      } else if (hasLowConfidence) {
        setScanError('Some results have low confidence. Please verify the highlighted parameters.');
      }
    } catch (err) {
      if (err.message.includes('API key') || err.message.includes('not configured')) {
        setScanError('Vision API not configured. Please select colors manually.');
      } else if (err.message.includes('network') || err.name === 'TypeError') {
        setScanError('Network error. Check your connection and try again.');
      } else {
        setScanError(err.message || 'Could not analyze the image. Try again with better lighting.');
      }
    } finally {
      setScanning(false);
    }
  };

  const overallResult = getOverallResult();
  const hasLowConfidence = scanConfidence && Object.values(scanConfidence).includes('low');

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">SVT Color Checker</h1>
          <p className="text-sm text-gray-500">Match colors from the test strip</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowReference(!showReference)}
            className="btn-secondary text-xs px-2 py-1.5"
          >
            <Info size={14} />
          </button>
          <button onClick={reset} className="btn-secondary text-xs px-2 py-1.5 flex items-center gap-1">
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      {/* Camera Scanner */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleCameraCapture}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={scanning}
        className="w-full mb-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-700 active:bg-blue-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {scanning ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Analyzing strip...
          </>
        ) : (
          <>
            <Camera size={18} />
            Scan SVT Strip with Camera
          </>
        )}
      </button>

      {/* Scan Error */}
      {scanError && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
          {scanError}
        </div>
      )}

      {/* Low Confidence Warning */}
      {hasLowConfidence && !scanError && (
        <div className="mb-4 p-3 rounded-lg bg-yellow-50 border border-yellow-200 text-sm text-yellow-700">
          Some parameters have low confidence. Verify the highlighted results below.
        </div>
      )}

      {/* Reference Image */}
      {showReference && (
        <div className="card mb-4">
          <p className="text-xs font-medium text-gray-600 mb-2">Reference Color Chart</p>
          <img
            src="/images/svt-color-chart.jpg"
            alt="SVT Color Chart Reference"
            className="w-full rounded-lg"
          />
        </div>
      )}

      {/* Overall Result */}
      {overallResult && (
        <div className={`card mb-4 border-l-4 ${overallResult.borderColor} ${overallResult.bgColor}`}>
          <div className="flex items-start gap-2">
            {overallResult.title === 'Normal' && <CheckCircle2 size={20} className="text-green-600 mt-0.5" />}
            {overallResult.title === 'Abnormal' && <XCircle size={20} className="text-red-600 mt-0.5" />}
            {overallResult.title === 'Review Needed' && <AlertTriangle size={20} className="text-yellow-600 mt-0.5" />}
            <div>
              <h3 className={`font-bold ${overallResult.textColor}`}>{overallResult.title}</h3>
              <p className={`text-sm mt-1 ${overallResult.textColor} opacity-90`}>{overallResult.description}</p>
              <p className={`text-sm mt-2 font-medium ${overallResult.textColor}`}>{overallResult.action}</p>
            </div>
          </div>
        </div>
      )}

      {/* Parameters */}
      <div className="space-y-4">
        {svtParameters.map((param) => {
          const selected = getSelectedColor(param.id);
          return (
            <div key={param.id} className="card">
              <h3 className="font-semibold text-gray-900 text-sm">{param.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5 mb-3">{param.description}</p>

              {/* Color Dropdown */}
              <ColorDropdown
                colors={param.colors}
                value={selections[param.id]}
                onChange={(val) => handleSelect(param.id, val)}
                confidence={scanConfidence?.[param.id]}
              />

              {/* Result for this parameter */}
              {selected && (
                <div className={`mt-3 p-2 rounded-lg text-sm ${
                  selected.result === 'Normal'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}>
                  <span className="font-semibold">{selected.result}:</span> {selected.detail}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="card mt-4 bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-blue-900 text-sm">How to Use</h3>
        <ol className="text-xs text-blue-700 mt-2 space-y-1 list-decimal list-inside">
          <li>Collect the specimen and wait for the SVT strip to develop</li>
          <li>Tap <strong>Scan SVT Strip with Camera</strong> to auto-detect colors, or select manually</li>
          <li>Compare each pad color to the dropdown options</li>
          <li>Review the overall result at the top</li>
          <li>If any parameter is Abnormal, flag the specimen</li>
        </ol>
      </div>
    </div>
  );
}
