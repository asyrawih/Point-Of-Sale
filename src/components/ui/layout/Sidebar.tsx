import React from 'react';
import { Home, Grid, Bookmark, ShoppingCart, MessageSquare, Settings, Clock } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-16 bg-white border-r">
      <div className="h-full flex flex-col items-center py-4 space-y-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
        
        <nav className="flex flex-col items-center space-y-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Home className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Grid className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bookmark className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ShoppingCart className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MessageSquare className="w-6 h-6 text-gray-600" />
          </button>
        </nav>

        <div className="mt-auto flex flex-col items-center space-y-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Clock className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </aside>
  );
}; 