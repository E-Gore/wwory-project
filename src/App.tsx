import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';

function App() {
  const [cartItems, setCartItems] = useState<string[]>([]);

  return (
    <BrowserRouter>
      <header className="navBar">
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home setCartItems={setCartItems} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;