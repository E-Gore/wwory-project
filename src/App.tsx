import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

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
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
