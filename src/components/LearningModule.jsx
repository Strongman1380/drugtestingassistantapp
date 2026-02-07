import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function LearningModule({ module, onBack }) {
  const [expandedSections, setExpandedSections] = useState(
    module?.sections?.reduce((acc, _, i) => ({ ...acc, [i]: i === 0 }), {}) || {}
  );

  if (!module) return null;

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const expandAll = () => {
    const all = module.sections.reduce((acc, _, i) => ({ ...acc, [i]: true }), {});
    setExpandedSections(all);
  };

  const collapseAll = () => {
    const none = module.sections.reduce((acc, _, i) => ({ ...acc, [i]: false }), {});
    setExpandedSections(none);
  };

  return (
    <div className="p-4">
      {/* Back Button */}
      <button onClick={onBack} className="flex items-center gap-1.5 text-blue-800 text-sm font-medium mb-4 py-2 -ml-1 pl-1 pr-3 rounded-lg active:bg-blue-50 transition-colors">
        <ArrowLeft size={18} /> Back to Learning Center
      </button>

      {/* Header */}
      <div className="mb-4">
        <p className="text-xs text-gray-400 font-medium">MODULE {module.id}</p>
        <h1 className="text-xl font-bold text-gray-900">{module.title}</h1>
        <p className="text-sm text-gray-500 mt-1">{module.description}</p>
      </div>

      {/* Expand/Collapse Controls */}
      <div className="flex gap-2 mb-4">
        <button onClick={expandAll} className="btn-secondary text-sm px-4 py-2">Expand All</button>
        <button onClick={collapseAll} className="btn-secondary text-sm px-4 py-2">Collapse All</button>
      </div>

      {/* Sections */}
      <div className="space-y-2">
        {module.sections.map((section, i) => (
          <div key={i} className="card">
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex items-center justify-between text-left py-1"
            >
              <h3 className="font-semibold text-gray-900 text-sm pr-2 leading-snug">{section.title}</h3>
              {expandedSections[i] ? (
                <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
              ) : (
                <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
              )}
            </button>
            {expandedSections[i] && (
              <div className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
