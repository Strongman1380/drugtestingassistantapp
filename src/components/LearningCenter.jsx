import { BookOpen, ChevronRight, FlaskConical, TestTubes, Search, ShieldCheck, FileText, AlertTriangle, Calculator, TestTube2, ClipboardList, Layers } from 'lucide-react';
import { learningModules } from '../data/learningModules';

const iconMap = {
  Layers,
  FlaskConical,
  Search,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Calculator,
  TestTube2,
  ClipboardList,
  BookOpen,
  TestTubes,
};

const moduleColors = [
  'bg-blue-600', 'bg-purple-600', 'bg-teal-600', 'bg-orange-600', 'bg-green-600',
  'bg-red-600', 'bg-yellow-600', 'bg-indigo-600', 'bg-pink-600', 'bg-cyan-600',
];

export default function LearningCenter({ onSelectModule }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-900 mb-1">Learning Center</h1>
      <p className="text-sm text-gray-500 mb-4">Educational modules on drug testing procedures and knowledge</p>

      <div className="space-y-3">
        {learningModules.map((mod, i) => {
          const Icon = iconMap[mod.icon] || BookOpen;
          return (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod)}
              className="card w-full text-left flex items-center gap-3 active:bg-gray-50 transition-shadow"
            >
              <div className={`${moduleColors[i % moduleColors.length]} p-2.5 rounded-xl flex-shrink-0`}>
                <Icon size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-gray-400 font-medium">MODULE {mod.id}</p>
                <h3 className="font-semibold text-gray-900 text-sm">{mod.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5 truncate">{mod.description}</p>
              </div>
              <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
