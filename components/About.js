function About() {
  try {
    return (
      <section id="about" className="py-20 relative" data-name="about" data-file="components/About.js">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&q=80" alt="DR Perfume Store" className="rounded-2xl shadow-2xl" />
            </div>

            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang <span className="text-[var(--primary-color)]">DR</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                DR adalah destinasi terpercaya untuk parfum premium di Indonesia. Kami berkomitmen menghadirkan koleksi parfum original dari brand-brand ternama dunia dengan harga terbaik.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Setiap produk yang kami jual dijamin 100% original dan dilengkapi dengan sertifikat keaslian. Kepuasan pelanggan adalah prioritas utama kami.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-effect rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">1000+</div>
                  <div className="text-gray-400">Pelanggan Puas</div>
                </div>
                <div className="glass-effect rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">100%</div>
                  <div className="text-gray-400">Original</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}