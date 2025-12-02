function Navbar({ cartCount, onCartClick }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect" data-name="navbar" data-file="components/Navbar.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-[var(--primary-color)] text-shadow-glow">DR</div>
              <span className="text-sm text-gray-400 hidden md:block">Luxury Perfume</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-[var(--primary-color)] transition-colors">Home</a>
              <a href="#products" className="text-white hover:text-[var(--primary-color)] transition-colors">Katalog</a>
              <a href="#testimonials" className="text-white hover:text-[var(--primary-color)] transition-colors">Testimoni</a>
              <a href="#about" className="text-white hover:text-[var(--primary-color)] transition-colors">About</a>
              <a href="https://wa.me/62895368244060?text=Halo%20DR%20Perfume" target="_blank" className="btn-primary text-sm">
                Chat Admin
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={onCartClick} className="relative p-2 hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-shopping-bag text-xl"></div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--accent-color)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <a href="#home" className="block text-white hover:text-[var(--primary-color)]">Home</a>
              <a href="#products" className="block text-white hover:text-[var(--primary-color)]">Katalog</a>
              <a href="#testimonials" className="block text-white hover:text-[var(--primary-color)]">Testimoni</a>
              <a href="#about" className="block text-white hover:text-[var(--primary-color)]">About</a>
              <a href="https://wa.me/62895368244060?text=Halo%20DR%20Perfume" target="_blank" className="block btn-primary text-center">
                Chat Admin
              </a>
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}