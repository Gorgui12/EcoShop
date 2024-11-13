
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './outils/Contexte/cartContext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Contact } from './Pages/Contact';
import { Product } from './Pages/Produits';
import { Erreur } from './Pages/Erreur';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
div {



}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
      <GlobalStyle/>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit" element={ <Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
       
      </CartProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
