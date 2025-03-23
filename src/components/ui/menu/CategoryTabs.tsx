import React from 'react';
import { cn } from '../../../lib/utils';

interface CategoryTabsProps {
  categories?: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories = [],
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex gap-2 p-4 overflow-x-auto">
      <button
        onClick={() => onSelectCategory('all')}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
          selectedCategory === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        )}
      >
        Semua
      </button>
      {Array.isArray(categories) && categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}; 