import './Options.css';

interface OptionsProps {
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Options({ setCartItems }: OptionsProps) {
  return (
    <header className="product-card">
      <img className='worImg' src="./public/worek1.png" alt="worek tu jest" />
      <div className="product-info">
        <p>worek</p>
        <button className="buy-btn" onClick={() => setCartItems(prev => [...prev, 'worek'])}>Kup worek</button>
      </div>
    </header>
  );
}