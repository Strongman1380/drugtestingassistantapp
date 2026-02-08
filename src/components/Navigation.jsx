import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Palette, Pill, BookOpen, ClipboardCheck, Phone } from 'lucide-react';

const navItems = [
  { id: 'assistant', label: 'AI Assistant', desc: 'Ask drug testing questions', Icon: MessageSquare, color: 'bg-blue-600' },
  { id: 'svt', label: 'SVT Color Checker', desc: 'Match specimen validity colors', Icon: Palette, color: 'bg-purple-600' },
  { id: 'drugs', label: 'Drug Reference', desc: 'Search drug detection info', Icon: Pill, color: 'bg-green-600' },
  { id: 'learn', label: 'Learning Center', desc: 'Educational modules', Icon: BookOpen, color: 'bg-orange-600' },
  { id: 'checklist', label: 'Collection Checklist', desc: 'Specimen collection steps', Icon: ClipboardCheck, color: 'bg-teal-600' },
];

export default function Navigation({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);

  const activePage = ['drugDetail'].includes(currentPage) ? 'drugs'
    : ['learningModule'].includes(currentPage) ? 'learn'
    : currentPage;

  // Close drawer on escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-3 left-3 z-50 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={22} className="text-gray-700" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-lg">Field Testing Assistant</h2>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto py-2">
          {navItems.map(({ id, label, desc, Icon, color }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activePage === id
                  ? 'bg-blue-50 border-r-2 border-blue-700'
                  : 'hover:bg-gray-50 active:bg-gray-100'
              }`}
            >
              <div className={`${color} p-2 rounded-lg flex-shrink-0`}>
                <Icon size={18} className="text-white" />
              </div>
              <div>
                <h3 className={`text-sm font-semibold ${activePage === id ? 'text-blue-800' : 'text-gray-900'}`}>{label}</h3>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Emergency contact at bottom */}
        <div className="border-t border-gray-100 px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Phone size={14} />
            <span className="font-medium">Redwood Toxicology Lab</span>
          </div>
          <a
            href="tel:8002552159"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 active:text-blue-900"
          >
            <Phone size={14} />
            (800) 255-2159
          </a>
          <p className="text-xs text-gray-400 mt-0.5">Option 4 for Customer Service</p>
        </div>
      </div>
    </>
  );
}
