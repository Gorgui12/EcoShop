



import { useState } from "react";
import { Cart } from "../Pages/Cart/index";         // Ajustez le chemin en fonction de votre structure de dossiers
import { Product } from "../Pages/Produits/index";  // Ajustez le chemin en fonction de votre structure de dossiers

function ParentComponent() {

  const [cart, updateCart] = useState([]);

  return (
    <div>
      {/* Passez cart et updateCart en tant que props */}
      <Product cart={cart} updateCart={updateCart} />
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default ParentComponent;
