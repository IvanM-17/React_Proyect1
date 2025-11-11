import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartWidget from "./components/CartWidget";

import './App.css';



export default function App() {
  return (
    <Router>

      <Navbar />
      <Routes>        
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>

    </Router>
  );
}



