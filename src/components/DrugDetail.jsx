import { ArrowLeft, Clock, Syringe, AlertTriangle, FileText, Beaker } from 'lucide-react';

export default function DrugDetail({ drug, onBack }) {
  if (!drug) return null;

  const InfoRow = ({ label, value }) => {
    if (!value || (Array.isArray(value) && value.length === 0)) return null;
    const display = Array.isArray(value) ? value.join(', ') : value;
    return (
      <div className="py-2 border-b border-gray-100 last:border-0">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
        <p className="text-sm text-gray-800 mt-0.5">{display}</p>
      </div>
    );
  };

  return (
    <div className="p-4">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-blue-800 text-sm font-medium mb-4 py-2 -ml-1 pl-1 pr-3 rounded-lg active:bg-blue-50 transition-colors">
        <ArrowLeft size={18} /> Back to Drug Guide
      </button>

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">{drug.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{drug.category}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mb-4">
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock size={14} className="text-blue-700" />
            <span className="text-xs font-medium text-blue-700">Urine Detection</span>
          </div>
          <p className="text-sm font-bold text-blue-900">{drug.detectionTimeUrine}</p>
        </div>
        <div className="card bg-green-50 border-green-200">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock size={14} className="text-green-700" />
            <span className="text-xs font-medium text-green-700">Oral Fluid Detection</span>
          </div>
          <p className="text-sm font-bold text-green-900">{drug.detectionTimeOralFluid}</p>
        </div>
      </div>

      {/* Details */}
      <div className="card mb-4">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
          <FileText size={16} /> General Information
        </h2>
        <InfoRow label="Common / Brand Names" value={drug.commonNames} />
        <InfoRow label="Street Names" value={drug.streetNames} />
        <InfoRow label="DEA Schedule" value={drug.deaSchedule} />
        <InfoRow label="Route of Administration" value={drug.routeOfAdmin} />
      </div>

      <div className="card mb-4">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
          <Beaker size={16} /> Metabolites Monitored
        </h2>
        <InfoRow label="Urine" value={drug.metabolitesUrine} />
        <InfoRow label="Oral Fluid" value={drug.metabolitesOralFluid} />
      </div>

      <div className="card mb-4">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
          <Syringe size={16} /> Detection Times
        </h2>
        <InfoRow label="Average Detection Time - Urine" value={drug.detectionTimeUrine} />
        <InfoRow label="Average Detection Time - Oral Fluid" value={drug.detectionTimeOralFluid} />
        <p className="text-xs text-gray-400 mt-2 italic">
          Detection times may vary based on dosage, frequency, metabolism, and other factors.
        </p>
      </div>

      <div className="card">
        <h2 className="font-semibold text-gray-900 flex items-center gap-2 mb-2">
          <AlertTriangle size={16} /> Addiction & Withdrawal
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{drug.addictionWithdrawal}</p>
      </div>
    </div>
  );
}
