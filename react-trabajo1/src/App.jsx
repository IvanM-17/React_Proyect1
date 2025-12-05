import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from './contexts/CartContext';
import './App.css';

export default function App() {
return (
<CartProvider>
<Router>
<Navbar />
<Routes>
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/" element={<ItemListContainer />} />
<Route path="/category/:categoryId" element={<ItemListContainer />} />
<Route path="/item/:itemId" element={<ItemDetailContainer />} />
</Routes>
</Router>
</CartProvider>
);}