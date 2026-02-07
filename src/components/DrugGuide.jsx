import { useState, useMemo } from 'react';
import { Search, ChevronRight, Filter } from 'lucide-react';
import { drugDatabase, drugCategories } from '../data/drugDatabase';

export default function DrugGuide({ onSelectDrug }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return drugDatabase.filter((drug) => {
      const matchesCategory = category === 'All' || drug.category === category;
      if (!search.trim()) return matchesCategory;

      const q = search.toLowerCase();
      const matchesSearch =
        drug.name.toLowerCase().includes(q) ||
        drug.commonNames.some((n) => n.toLowerCase().includes(q)) ||
        drug.streetNames.some((n) => n.toLowerCase().includes(q)) ||
        drug.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const categoryColor = (cat) => {
    const colors = {
      'Opiates/Opioids': 'bg-red-100 text-red-700',
      'Synthetic Opioids': 'bg-red-100 text-red-700',
      'Stimulants': 'bg-yellow-100 text-yellow-700',
      'Benzodiazepines': 'bg-blue-100 text-blue-700',
      'Barbiturates': 'bg-purple-100 text-purple-700',
      'Muscle Relaxants': 'bg-teal-100 text-teal-700',
      'Tricyclic Antidepressants': 'bg-indigo-100 text-indigo-700',
      'Neuropathics': 'bg-cyan-100 text-cyan-700',
      'SSRIs': 'bg-sky-100 text-sky-700',
      'Sedatives/Hypnotics': 'bg-violet-100 text-violet-700',
      'Hallucinogens': 'bg-pink-100 text-pink-700',
      'Cannabis': 'bg-green-100 text-green-700',
      'Other': 'bg-gray-100 text-gray-700',
    };
    return colors[cat] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-900 mb-1">Drug Reference Guide</h1>
      <p className="text-sm text-gray-500 mb-4">Search drugs by name, street name, or category</p>

      {/* Search */}
      <div className="relative mb-3">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search drugs, street names..."
          className="input-field pl-9 text-sm"
        />
      </div>

      {/* Filter Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="btn-secondary text-xs flex items-center gap-1 mb-3"
      >
        <Filter size={14} />
        {category === 'All' ? 'Filter by Category' : category}
      </button>

      {/* Category Filter */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {drugCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setShowFilters(false); }}
              className={`text-xs px-3 py-2 rounded-full font-medium transition-colors ${
                category === cat
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-600 active:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Results Count */}
      <p className="text-xs text-gray-400 mb-2">
        {filtered.length} drug{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Drug List */}
      <div className="space-y-2">
        {filtered.map((drug) => (
          <button
            key={drug.id}
            onClick={() => onSelectDrug(drug)}
            className="card w-full text-left flex items-center gap-3 active:bg-gray-50 transition-shadow"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 text-sm truncate">{drug.name}</h3>
                <span className={`text-[11px] px-2 py-0.5 rounded-full flex-shrink-0 ${categoryColor(drug.category)}`}>
                  {drug.category}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {drug.commonNames.length > 0 ? drug.commonNames.slice(0, 3).join(', ') : 'No common names'}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Detection: {drug.detectionTimeUrine} (urine)
              </p>
            </div>
            <ChevronRight size={16} className="text-gray-300 flex-shrink-0" />
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="font-medium">No drugs found</p>
          <p className="text-sm mt-1">Try a different search term or category</p>
        </div>
      )}
    </div>
  );
}
