function Products({ products, addToCart }) {
  try {
    return (
      <section id="products" className="py-20 relative" data-name="products" data-file="components/Products.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Koleksi <span className="text-[var(--primary-color)]">Premium</span>
            </h2>
            <p className="text-gray-400 text-lg">Pilihan parfum terbaik dari brand ternama dunia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}