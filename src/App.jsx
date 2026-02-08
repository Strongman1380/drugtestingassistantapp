import { useState } from 'react';
import Navigation from './components/Navigation';
import AIAssistant from './components/AIAssistant';
import SVTColorChecker from './components/SVTColorChecker';
import DrugGuide from './components/DrugGuide';
import DrugDetail from './components/DrugDetail';
import LearningCenter from './components/LearningCenter';
import LearningModule from './components/LearningModule';
import Checklist from './components/Checklist';
import InstallPrompt from './components/InstallPrompt';

export default function App() {
  const [currentPage, setCurrentPage] = useState('assistant');
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const navigate = (page, data) => {
    if (page === 'drugDetail' && data) {
      setSelectedDrug(data);
    } else if (page === 'learningModule' && data) {
      setSelectedModule(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'assistant':
        return <AIAssistant />;
      case 'svt':
        return <SVTColorChecker />;
      case 'drugs':
        return <DrugGuide onSelectDrug={(drug) => navigate('drugDetail', drug)} />;
      case 'drugDetail':
        return <DrugDetail drug={selectedDrug} onBack={() => navigate('drugs')} />;
      case 'learn':
        return <LearningCenter onSelectModule={(mod) => navigate('learningModule', mod)} />;
      case 'learningModule':
        return <LearningModule module={selectedModule} onBack={() => navigate('learn')} />;
      case 'checklist':
        return <Checklist />;
      default:
        return <AIAssistant />;
    }
  };

  const isAssistant = currentPage === 'assistant';

  return (
    <div className="min-h-[100dvh] bg-gray-50">
      <InstallPrompt />
      <Navigation currentPage={currentPage} onNavigate={navigate} />
      <div className={`max-w-lg mx-auto ${isAssistant ? '' : 'pt-12'}`}>
        {renderPage()}
      </div>
    </div>
  );
}
