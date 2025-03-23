import React from 'react';
import { Plus } from 'lucide-react';
import { useCartStore } from '../../../store/useCartStore';
import { formatRupiah } from '../../../utils/currency';

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ id, name, price, image, category }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => addItem({ id, name, price, image, category })}
          className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-medium text-gray-800 text-sm line-clamp-1">{name}</h3>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{category}</span>
        </div>
        <p className="text-blue-600 font-semibold text-sm">{formatRupiah(price)}</p>
      </div>
    </div>
  );
}; 