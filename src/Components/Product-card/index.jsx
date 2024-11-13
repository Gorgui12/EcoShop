import styled from 'styled-components'
import colors from '../../outils/styles/colors'



const CardContainer = styled.div`
max-width: 10rem;
background-color: #F4E3D7;
box-shandow: 0 4px 8px rgba(0, 0, 0, 0.1 )
flex: 0 0 auto;


dispaly: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
padding-bottom: 10px;

margin: 30px;
border-radius: 18px;

`
const ProductImage = styled.img`
width: 100%;
height:40%
top: 0;

`
const ProductPrice = styled.span`
opacity: 100%;
colors: ${colors.secondary};
`



export function CardProduct({productImage,productName, productPrice}){
    return(
        <CardContainer>
            <ProductImage src={productImage} alt="l'image du produit" />
            <h3>{productName}</h3>
            
            <ProductPrice>{productPrice }$</ProductPrice>
            
        </CardContainer>
 
    )
}