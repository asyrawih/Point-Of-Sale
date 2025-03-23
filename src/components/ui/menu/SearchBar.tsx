import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar: React.FC = () => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search items..."
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border-none focus:ring-2 focus:ring-purple-600"
      />
      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}; 