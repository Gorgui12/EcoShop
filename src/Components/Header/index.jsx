import styled from 'styled-components'
import { CartContext } from "../../outils/Contexte/cartContext";
import {useNavigate} from 'react-router-dom'

import {FaShoppingCart} from 'react-icons/fa'
import { useContext } from 'react';



const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #88b04b;
  color: #fae3d7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const LogoContainer = styled.h1`
  font-size: 1.8rem;
  color: #fae3d7;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 25px;

  a {
    color: #fae3d7;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #8abad3;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fae3d7;

  .icon {
    font-size: 1.5rem;
    margin-right: 5px;
  }

  .item-count {
    background-color: #8abad3;
    color: #4a4a4a;
    padding: 2px 6px;
    border-radius: 50%;
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: -10px;
  }
`;

export function Header(){
const {cart} = useContext(CartContext)
const navigate = useNavigate();
const handleCartClick = ()=> {
  navigate('/cart');
}

    return(
        <HeaderContainer>
      <LogoContainer>EcoShop</LogoContainer>
      <NavLinks>
        <a href="/">Accueil</a>
        <a href="/produit">Produits</a>
        <a href="/contact">Contact</a>
      </NavLinks>
      <CartIcon onClick={handleCartClick}>
      <FaShoppingCart className="icon" to='/cart' />
        <span className="item-count">{cart.length}</span> {/* Remplacez 3 par le nombre d'articles dynamiquement */} 
        
      </CartIcon>
    </HeaderContainer>

    )
}

