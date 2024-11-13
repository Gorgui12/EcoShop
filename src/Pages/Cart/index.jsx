import { CartContext } from "../../outils/Contexte/cartContext";
import { useContext } from "react";
import { ShopingCart } from "../../Components/ShopingCart"
import styled from 'styled-components'


const CartBody = styled.div`
margin-top: 3rem;
display: grid;
grid-template-columns: 75% 20%;
gap: 5px;
`
const CartContainer = styled.div`
padding-left: 5rem;
background-color: #8ABAD3;


`
const ResumerContainer = styled.div`
background-color: #8ABAD3;
height: 11rem;
`




export function Cart( ){
  const {cart} = useContext(CartContext)
  const Total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);


   
   
  
        return (
          <CartBody>
            <CartContainer>
             {
                cart.length> 0 ? (
                    cart.map((item, index) => (
                      
                      <div>
                <ShopingCart
                  key={index}
                  productImage={item.image}
                  productName={item.title}
                  productPrice={item.price}
                  productAmount={item.amount}
                />
                </div>
                
               
              ))
                ):(
                  <h1>le panier est vide</h1>
                )
             }         
            </CartContainer>
            <ResumerContainer>
            <table>
          <thead>
            <tr>
              <th colSpan="2">RESUME DU PANIER</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total</td>
              <td>{Total.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button>COMMANDER ({Total.toFixed(2)})</button>
              </td>
            </tr>
          </tbody>
        </table>
           </ResumerContainer>
            </CartBody>
          );
        }

