import React, { useMemo } from 'react';
import { Minus, Plus, User, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../../store/useCartStore';
import { formatRupiah } from '../../../utils/currency';

export const OrderPanel: React.FC = () => {
  const { items, updateQuantity } = useCartStore();

  const calculations = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const serviceCharge = subtotal * 0.2;
    const tax = subtotal * 0.05;
    const total = subtotal + serviceCharge + tax;

    return {
      subtotal,
      serviceCharge,
      tax,
      total,
    };
  }, [items]);

  return (
    <div className="w-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <span className="font-semibold text-gray-800">Hanan Asyrawi Rivai</span>
          <p className="text-sm text-gray-500">Cashier</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <ShoppingCart className="w-16 h-16 mb-4" />
            <p className="text-lg">Keranjang Kosong</p>
            <p className="text-sm">Tambahkan item untuk memulai transaksi</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 font-medium">{formatRupiah(item.price)}</p>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm">
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="w-5 h-5 text-gray-600" />
                </button>
                <span className="w-8 text-center font-medium text-gray-800">{item.quantity}</span>
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 space-y-3 bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">{formatRupiah(calculations.subtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Discount</span>
          <span className="font-medium">{formatRupiah(0)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Service Charge (20%)</span>
          <span className="font-medium">{formatRupiah(calculations.serviceCharge)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (5%)</span>
          <span className="font-medium">{formatRupiah(calculations.tax)}</span>
        </div>
        <div className="border-t pt-3 mt-2">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span className="text-blue-600">{formatRupiah(calculations.total)}</span>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg mt-6 font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
        Lanjutkan Pembayaran
      </button>
    </div>
  );
}; 