import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ColorDropdown({ colors, value, onChange, confidence }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = colors.find((c) => c.value === value);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors min-h-[48px]"
      >
        {selected ? (
          <>
            <span
              className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0"
              style={{ backgroundColor: selected.color }}
            />
            <span className="text-sm font-medium text-gray-900 flex-1 text-left">
              {selected.label}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              selected.result === 'Normal'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {selected.result}
            </span>
            {confidence && confidence !== 'high' && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                confidence === 'medium'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {confidence === 'medium' ? 'Verify' : 'Low confidence'}
              </span>
            )}
          </>
        ) : (
          <span className="text-sm text-gray-400 flex-1 text-left">Tap to select color...</span>
        )}
        <ChevronDown size={16} className={`text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute z-50 left-0 right-0 mt-1 bg-white rounded-lg border border-gray-200 shadow-lg max-h-60 overflow-y-auto">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => {
                onChange(color.value);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-3 hover:bg-gray-50 transition-colors min-h-[48px] ${
                value === color.value ? 'bg-blue-50' : ''
              }`}
            >
              <span
                className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0"
                style={{ backgroundColor: color.color }}
              />
              <span className="text-sm text-gray-900 flex-1 text-left">{color.label}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                color.result === 'Normal'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {color.result}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
