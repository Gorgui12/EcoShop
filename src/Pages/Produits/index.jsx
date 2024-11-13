import { CardProduct } from "../../Components/Product-card";
import styled from 'styled-components';
import {useContext, useEffect, useState } from "react";
import { CartContext } from "../../outils/Contexte/cartContext";
import {Loader} from '../../Components/Loader/loader'


const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem 20rem;
  
  padding: 30px;
  gap: 15px;

@media (max-width: 768px) {
   display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  
  
`;
const CartProductContainer = styled.div`
max-width: 15rem;
background-color: #F4E3D7;
box-shandow: 0 4px 8px rgba(0, 0, 0, 0.1 )
flex: 0 0 auto;
@media (max-width: 768px) {
    max-width: 12rem
  }


`

export function Product() {
  const {updateCart} = useContext(CartContext);
  const [Product, setProduct] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [Error, setError] = useState(false);

  useEffect(() => {
    async function ProductResponse() {
      try {
        setIsDataLoading(true)
        const response = await fetch('https://fakestoreapi.com/products/');
        const result = await response.json();
        console.log(result);
        setProduct(result);
      } catch (Error) {
        setError(true);
      }finally{
       setIsDataLoading(false)
      }
    }
    ProductResponse();
  }, []);

  

  return (
    <ProductContainer>
    { isDataLoading ? (
       <Loader/>
    ): (

      Product.map((product, index) => (
        <CartProductContainer key={index}>
          <CardProduct
            productImage={product.image}
            productName={product.title}
            productPrice={product.price}  
            
          />
          <button onClick={() => updateCart({ title: product.title, price: product.price, image: product.image })}>
          
            Ajouter au panier
          </button>
        </CartProductContainer>
      ))
    
    )}
    </ProductContainer>
  );
}
