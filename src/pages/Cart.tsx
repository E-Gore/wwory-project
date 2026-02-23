interface CartProps {
  cartItems: string[];
}

export default function Cart({ cartItems }: CartProps) {
  return (
    <div className="page">
      {cartItems.length === 0 ? (
        <div className="cart-empty">Twój koszyk jest pusty!</div>
      ) : (
        <ul>
          {cartItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}