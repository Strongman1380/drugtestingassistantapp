import { MessageSquare, Palette, Pill, BookOpen, ClipboardCheck, Phone, Shield } from 'lucide-react';

const quickActions = [
  { id: 'assistant', label: 'AI Assistant', desc: 'Ask drug testing questions', Icon: MessageSquare, color: 'bg-blue-600' },
  { id: 'svt', label: 'SVT Color Checker', desc: 'Match specimen validity colors', Icon: Palette, color: 'bg-purple-600' },
  { id: 'drugs', label: 'Drug Reference', desc: 'Search drug detection info', Icon: Pill, color: 'bg-green-600' },
  { id: 'learn', label: 'Learning Center', desc: '10 educational modules', Icon: BookOpen, color: 'bg-orange-600' },
  { id: 'checklist', label: 'Collection Checklist', desc: 'Specimen collection steps', Icon: ClipboardCheck, color: 'bg-teal-600' },
];

export default function Home({ onNavigate }) {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="text-center pt-6 pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 rounded-2xl mb-3">
          <Shield size={32} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Field Testing Assistant</h1>
        <p className="text-gray-500 text-sm mt-1">Drug testing education & tools for staff</p>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3 mt-4">
        {quickActions.map(({ id, label, desc, Icon, color }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className="card w-full flex items-center gap-4 text-left hover:shadow-md transition-shadow active:bg-gray-50"
          >
            <div className={`${color} p-3 rounded-xl flex-shrink-0`}>
              <Icon size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{label}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="card mt-6 bg-blue-50 border-blue-200">
        <div className="flex items-start gap-3">
          <Phone size={20} className="text-blue-800 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900">Redwood Toxicology Lab</h3>
            <p className="text-sm text-blue-700 mt-0.5">Customer Service & Support</p>
            <a
              href="tel:8002552159"
              className="inline-flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-blue-100 text-sm font-medium text-blue-800 active:bg-blue-200 transition-colors"
            >
              <Phone size={16} />
              (800) 255-2159
            </a>
            <p className="text-xs text-blue-600 mt-1">Option 4 for Customer Service</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-gray-400 mt-6 pb-2">
        For educational purposes only. Consult a toxicologist for official decisions.
      </p>
    </div>
  );
}
