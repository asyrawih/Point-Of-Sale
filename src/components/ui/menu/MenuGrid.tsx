import { useState, useMemo } from 'react';
import { MenuItem } from './MenuItem';
import { CategoryTabs } from './CategoryTabs';

const menuItems = [
  {
    id: 1,
    name: 'Raspberry Tart',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=500&auto=format&fit=crop',
    category: 'Tart'
  },
  {
    id: 2,
    name: 'Chocolate Tart',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500&auto=format&fit=crop',
    category: 'Tart'
  },
  {
    id: 3,
    name: 'Fruit Tart',
    price: 90000,
    image: 'https://images.unsplash.com/photo-1621955511667-e2c316e4575d?q=80&w=500&auto=format&fit=crop',
    category: 'Tart'
  },
  {
    id: 4,
    name: 'Chocolate Cake',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500&auto=format&fit=crop',
    category: 'Cake'
  },
  {
    id: 5,
    name: 'Mini Chocolate Cake',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=500&auto=format&fit=crop',
    category: 'Cake'
  },
  {
    id: 6,
    name: 'Vanilla Cake',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=500&auto=format&fit=crop',
    category: 'Cake'
  },
  {
    id: 7,
    name: 'Just Cake',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=500&auto=format&fit=crop',
    category: 'Cake'
  }
];

export const MenuGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    if (!menuItems || menuItems.length === 0) return [];
    const uniqueCategories = new Set(menuItems.map(item => item.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredItems = useMemo(() => {
    if (!menuItems || menuItems.length === 0) return [];
    if (selectedCategory === 'all') return menuItems;
    return menuItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}; 