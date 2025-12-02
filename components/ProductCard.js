function ProductCard({ product, addToCart }) {
  try {
    const formatPrice = (price) => {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    };

    const handleWhatsApp = () => {
      const message = `Halo, saya ingin memesan parfum:\n- ${product.name}\n- Jumlah: 1\n- Total harga: ${formatPrice(product.price)}\n\nNama:\nAlamat:`;
      window.open(`https://wa.me/62895368244060?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
      <div className="product-card fade-in" data-name="product-card" data-file="components/ProductCard.js">
        <div className="relative overflow-hidden group">
          <img src={product.image} alt={product.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-[var(--primary-color)]">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{product.notes}</p>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <div className="text-3xl font-bold mb-6 text-white">{formatPrice(product.price)}</div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => addToCart(product)} className="flex-1 btn-primary text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="icon-shopping-cart text-lg"></div>
                <span>Tambah</span>
              </div>
            </button>
            <button onClick={handleWhatsApp} className="flex-1 btn-outline text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="icon-message-circle text-lg"></div>
                <span>Beli</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}