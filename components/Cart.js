function Cart({ isOpen, onClose, items, updateQuantity, removeFromCart, totalPrice }) {
  try {
    const formatPrice = (price) => {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };

    const handleCheckout = () => {
      if (items.length === 0) return;
      
      let message = 'Halo, saya ingin memesan parfum:\n\n';
      items.forEach(item => {
        message += `- ${item.name}\n  Jumlah: ${item.quantity}\n  Harga: ${formatPrice(item.price * item.quantity)}\n\n`;
      });
      message += `Total: ${formatPrice(totalPrice)}\n\nNama:\nAlamat:`;
      
      window.open(`https://wa.me/62895368244060?text=${encodeURIComponent(message)}`, '_blank');
    };

    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50" data-name="cart" data-file="components/Cart.js">
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}></div>
        
        <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-zinc-900 shadow-2xl transform transition-transform duration-300">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-2xl font-bold text-[var(--primary-color)]">Keranjang</h2>
              <button onClick={onClose} className="p-2 hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-x text-xl"></div>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <div className="icon-shopping-bag text-6xl text-gray-600 mb-4 mx-auto w-fit"></div>
                  <p className="text-gray-400">Keranjang masih kosong</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="glass-effect rounded-xl p-4">
                      <div className="flex gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400 mb-2">{formatPrice(item.price)}</p>
                          <div className="flex items-center space-x-3">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[var(--primary-color)] hover:text-black transition-all flex items-center justify-center">
                              <div className="icon-minus text-sm"></div>
                            </button>
                            <span className="font-bold text-white">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[var(--primary-color)] hover:text-black transition-all flex items-center justify-center">
                              <div className="icon-plus text-sm"></div>
                            </button>
                            <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 hover:text-red-400 transition-colors">
                              <div className="icon-trash-2 text-lg"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-zinc-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-400">Total</span>
                  <span className="text-2xl font-bold text-[var(--primary-color)]">{formatPrice(totalPrice)}</span>
                </div>
                <button onClick={handleCheckout} className="w-full btn-primary">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="icon-message-circle text-lg"></div>
                    <span>Checkout via WhatsApp</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Cart component error:', error);
    return null;
  }
}