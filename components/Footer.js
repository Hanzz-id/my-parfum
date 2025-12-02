function Footer() {
  try {
    return (
      <footer className="bg-zinc-900 py-12 border-t border-zinc-800" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-4">DR</h3>
              <p className="text-gray-400">Luxury Perfume Store - Parfum premium original dengan harga terbaik.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Navigasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-[var(--primary-color)] transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-[var(--primary-color)] transition-colors">Katalog</a></li>
                <li><a href="#testimonials" className="hover:text-[var(--primary-color)] transition-colors">Testimoni</a></li>
                <li><a href="#about" className="hover:text-[var(--primary-color)] transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="icon-phone text-sm"></div>
                  <span>0895-3682-4060</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="icon-mail text-sm"></div>
                  <span>info@drperfume.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-black transition-all">
                  <div className="icon-instagram text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-black transition-all">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="https://wa.me/6289536824060" target="_blank" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-black transition-all">
                  <div className="icon-message-circle text-lg"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DR Luxury Perfume. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
