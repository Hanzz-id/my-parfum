function Hero() {
  try {
    React.useEffect(() => {
      const tl = gsap.timeline();
      tl.from('.hero-title', { opacity: 0, y: 50, duration: 1, delay: 0.5 })
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, scale: 0.8, duration: 0.6, stagger: 0.2 }, '-=0.3');

      gsap.to('.hero-bottle', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, []);

    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden smoke-bg" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-color)] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-color)] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 text-shadow-glow">
                Temukan Aroma <span className="text-[var(--primary-color)]">Kelas Premium</span>
              </h1>
              <p className="hero-subtitle text-xl text-gray-300 mb-8">
                Koleksi parfum mewah dari brand internasional terbaik untuk mencerminkan kepribadian Anda yang eksklusif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#products" className="hero-cta btn-primary inline-block text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Lihat Katalog</span>
                    <div className="icon-arrow-right text-lg"></div>
                  </div>
                </a>
                <a href="https://wa.me/62895368244060?text=Halo%20DR%20Perfume" target="_blank" className="hero-cta btn-outline inline-block text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="icon-message-circle text-lg"></div>
                    <span>Chat Admin</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="hero-bottle relative">
                <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80" alt="Dior Sauvage" className="w-full max-w-md rounded-2xl shadow-2xl" />
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] rounded-2xl blur-2xl opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}