function Testimonials() {
  try {
    const testimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        text: 'Parfum originalnya luar biasa! Kemasan mewah dan pengiriman cepat. Sangat puas dengan Black Opium yang saya beli.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80'
      },
      {
        id: 2,
        name: 'Michael Chen',
        rating: 5,
        text: 'Dior Sauvage favoritku! DR Perfume selalu memberikan produk original dengan harga terbaik. Highly recommended!',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80'
      },
      {
        id: 3,
        name: 'Aisha Rahman',
        rating: 5,
        text: 'Pelayanan sangat profesional. Baccarat Rouge 540 yang saya pesan sampai dengan aman dan wanginya tahan lama.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80'
      }
    ];

    return (
      <section id="testimonials" className="py-20 relative" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Apa Kata <span className="text-[var(--primary-color)]">Mereka</span>
            </h2>
            <p className="text-gray-400 text-lg">Testimoni pelanggan setia DR Perfume</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="glass-effect rounded-2xl p-6 fade-in hover:border-[var(--primary-color)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="flex text-[var(--primary-color)]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="icon-star text-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}