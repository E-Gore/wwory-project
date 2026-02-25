import './Cart.css';

interface CartProps {
  cartItems: string[];
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Cart({ cartItems, setCartItems }: CartProps) {
  return (
    <div className="page">
      {cartItems.length === 0 ? (
        <div className="cart-empty">Twój koszyk jest pusty!</div>
      ) : (
        <>
          {cartItems.map((item, i) => (
            <div key={i} className="cart-item">
              <div className="cart-item-img" />
              <span>{item}</span>
              <span>brązowy</span>
              <span>69 zł</span>
              <button onClick={() => setCartItems(prev => prev.filter((_, j) => j !== i))}>usuń</button>
            </div>
          ))}
          <a href="#">Check Out!</a>
        </>
      )}
    </div>
  );
}