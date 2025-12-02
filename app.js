class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    React.useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.utils.toArray('.fade-in').forEach(elem => {
        gsap.from(elem, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, []);

    const addToCart = (product) => {
      const existingItem = cartItems.find(item => item.id === product.id);
      if (existingItem) {
        setCartItems(cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    };

    const updateQuantity = (id, quantity) => {
      if (quantity <= 0) {
        setCartItems(cartItems.filter(item => item.id !== id));
      } else {
        setCartItems(cartItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        ));
      }
    };

    const removeFromCart = (id) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };

    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <Products products={PRODUCTS} addToCart={addToCart} />
        <Testimonials />
        <About />
        <Footer />
        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          totalPrice={getTotalPrice()}
        />
        <WhatsAppButton />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);