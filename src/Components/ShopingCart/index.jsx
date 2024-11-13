import styled from 'styled-components'

import { useContext } from 'react'
import {CartContext} from '../../outils/Contexte/cartContext'
import colors from '../../outils/styles/colors'

const ShopingCartContainer = styled.div`
width: 70%;
display: grid;
grid-template-columns: 20% 50% 30%;
grid-template-rows: 10rem;
border-bottom: 1px solid ${colors.primary};

`
const FirstBloc = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
const ImageContainer = styled.div`
padding: 20px;
margin-bottom: 20px;

`
const Image = styled.img`
height: 80px;
width: 70px
`
const ScondeBloc = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ThreeBloc = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ThreeBlocSecondItem = styled.div`
display: flex;
`

export function ShopingCart({productImage, productName, productDescription, productPrice, productAmount}){
    const {Cart}  = useContext(CartContext)
    
    return(
      <ShopingCartContainer>
        <FirstBloc>
            <ImageContainer><Image src={productImage} alt="" /></ImageContainer>
            <div><button>Supprimer</button></div>
            
        </FirstBloc>
        <ScondeBloc>
           <p>{productName}</p>
           <p>Disponible</p>
        </ScondeBloc>
        <ThreeBloc>
            <div>{productPrice}</div>
            <ThreeBlocSecondItem>
                <button>-</button>
                <p>{productAmount}</p>
                <button>+</button>
            </ThreeBlocSecondItem>
        </ThreeBloc>
      </ShopingCartContainer>
        
    )
}