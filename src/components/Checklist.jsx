import { useState } from 'react';
import { RotateCcw, CheckCircle2, Circle, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { specimenChecklist, formSections } from '../data/checklistData';

export default function Checklist() {
  const [checked, setChecked] = useState({});
  const [showFormGuide, setShowFormGuide] = useState(false);

  const toggleItem = (id) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => setChecked({});

  const totalItems = specimenChecklist.items.length;
  const completedItems = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-xl font-bold text-gray-900">Collection Checklist</h1>
        <button onClick={resetChecklist} className="btn-secondary text-xs flex items-center gap-1">
          <RotateCcw size={14} /> Reset
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-4">{specimenChecklist.description}</p>

      {/* Progress Bar */}
      <div className="card mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-blue-800">{completedItems}/{totalItems}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-800 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {completedItems === totalItems && totalItems > 0 && (
          <p className="text-sm text-green-600 font-medium mt-2 flex items-center gap-1">
            <CheckCircle2 size={16} /> All items completed!
          </p>
        )}
      </div>

      {/* Checklist Items */}
      <div className="space-y-2">
        {specimenChecklist.items.map((item) => (
          <div key={item.id} className="card">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-start gap-3 text-left py-1"
            >
              {checked[item.id] ? (
                <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <Circle size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="text-[11px] font-medium text-gray-400 uppercase">{item.category}</p>
                <p className={`text-sm ${checked[item.id] ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  {item.text}
                </p>
                {item.subItems && (
                  <ul className="mt-1.5 space-y-1">
                    {item.subItems.map((sub, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                        <span className="text-gray-300 mt-0.5">-</span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Form Guide Toggle */}
      <button
        onClick={() => setShowFormGuide(!showFormGuide)}
        className="card w-full mt-4 flex items-center justify-between text-left bg-blue-50 border-blue-200"
      >
        <h3 className="font-semibold text-blue-900 text-sm">Requisition Form Guide</h3>
        {showFormGuide ? (
          <ChevronUp size={16} className="text-blue-600" />
        ) : (
          <ChevronDown size={16} className="text-blue-600" />
        )}
      </button>

      {showFormGuide && (
        <div className="space-y-2 mt-2">
          {formSections.sections.map((section) => (
            <div key={section.number} className="card">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 bg-blue-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {section.number}
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{section.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{section.description}</p>
                  {section.tips && (
                    <ul className="mt-2 space-y-1">
                      {section.tips.map((tip, i) => (
                        <li key={i} className="text-xs text-blue-700 flex items-start gap-1">
                          <span className="text-blue-400">-</span> {tip}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.commonTests && (
                    <div className="mt-2">
                      <p className="text-xs font-medium text-gray-500 mb-1">Common Test Codes:</p>
                      {section.commonTests.map((test) => (
                        <div key={test.code} className="text-xs text-gray-600 mb-1">
                          <span className="font-mono font-bold text-blue-800">{test.code}</span> - {test.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contact */}
      <div className="card mt-4 bg-blue-50 border-blue-200">
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-blue-800" />
          <div>
            <p className="text-xs text-blue-700">{specimenChecklist.contactInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
