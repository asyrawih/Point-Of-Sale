import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  get subtotal(): number;
  get serviceCharge(): number;
  get tax(): number;
  get total(): number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    });
  },
  updateQuantity: (id, quantity) => {
    if (quantity < 1) {
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      }));
    } else {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      }));
    }
  },
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  clearCart: () => {
    set({ items: [] });
  },
  get subtotal() {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },
  get serviceCharge() {
    return get().subtotal * 0.2;
  },
  get tax() {
    return get().subtotal * 0.05;
  },
  get total() {
    return get().subtotal + get().serviceCharge + get().tax;
  },
})); 