import { Home, MessageSquare, Palette, Pill, BookOpen, ClipboardCheck } from 'lucide-react';

const tabs = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'assistant', label: 'AI Chat', Icon: MessageSquare },
  { id: 'svt', label: 'SVT', Icon: Palette },
  { id: 'drugs', label: 'Drugs', Icon: Pill },
  { id: 'learn', label: 'Learn', Icon: BookOpen },
  { id: 'checklist', label: 'Checks', Icon: ClipboardCheck },
];

export default function Navigation({ currentPage, onNavigate }) {
  const activePage = ['drugDetail'].includes(currentPage) ? 'drugs'
    : ['learningModule'].includes(currentPage) ? 'learn'
    : currentPage;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-bottom z-50">
      <div className="max-w-lg mx-auto grid grid-cols-6">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`nav-item ${activePage === id ? 'nav-item-active' : 'nav-item-inactive'}`}
          >
            <Icon size={22} strokeWidth={activePage === id ? 2.5 : 1.5} />
            <span className="truncate w-full text-center">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
