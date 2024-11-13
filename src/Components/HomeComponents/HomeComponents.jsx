
import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
import HeroBackground from '../../assets/HeroBackground.jpg'
import colors from '../../outils/styles/colors'

const HeroSectionContainer = styled.div`
margin-top: 1rem;
display: grid;
grid-template-rows: 75% 25% ;
height: 30rem;
width: 100%;
background-image: url(${HeroBackground});
background-position: center;
backgroun-repeat: no-repeat;
align-items: center;
justify-content: center;

`

const HeroTextContainer = styled.div`
max-width: 600px;
line-height: 30px;
font-size: 2rem;

`
const HeroText = styled.p`
position: relative;
z-index: 2;
color: ${colors.primary};
font-sixe: 30px;
box-shandow: shandows;
line-height: 3rem;
`
const HeroCallToAction = styled.button`
padding: 0.7rem 1.2rem;
margin-right: 10rem;
border-radius: 15px;
background-color: #8abad3;
color: white;
transition: transform 0.4s ease;
:&hover{
transform: scale(1.1);
}

`


// l'style du hight product

const ProductContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding: 20px;
  width: 100%;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductCard = styled.div`
  min-width: 200px; 
  max-width: 25rem;
  max-height: 15rem;
  flex: 0 0 auto;
  background-color: #fae3d7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  scroll-snap-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    color: #4a4a4a;
    font-size: 1.1rem;
    margin: 10px 0;
  }

  p {
    color: #4a4a4a;
  }
`;







export function HeroSection(){
    return(
        <HeroSectionContainer>
            <HeroTextContainer>
            <HeroText>
            Optez pour un mode de vie écologique avec notre sélection de produits durables et respectueux de l’environnement. Agissons ensemble pour un monde plus vert !
            </HeroText>
            </HeroTextContainer>
            <HeroCallToAction>Decouvrir</HeroCallToAction>
            
        </HeroSectionContainer>
    )
}

export const ProductHighlights = ({ products }) => {
    const scrollContainerRef = useRef(null);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
  
    // Détecte si l'utilisateur est en train de faire défiler
    useEffect(() => {
      const handleUserScroll = () => {
        setIsUserScrolling(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setIsUserScrolling(false), 3000); // Repart après 3s d'inactivité
      };
  
      const container = scrollContainerRef.current;
      container.addEventListener('scroll', handleUserScroll);
  
      let timeoutId = setTimeout(() => setIsUserScrolling(false), 3000);
  
      return () => {
        container.removeEventListener('scroll', handleUserScroll);
        clearTimeout(timeoutId);
      };
    }, []);
  
    // Défilement automatique quand l'utilisateur n'interagit pas
    useEffect(() => {
      if (!isUserScrolling) {
        const scrollInterval = setInterval(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
              left: 220, // Ajuste selon la largeur de chaque carte produit
              behavior: 'smooth',
            });
          }
        }, 2000); // Toutes les 2s
  
        return () => clearInterval(scrollInterval);
      }
    }, [isUserScrolling]);
  
    return (
      <ProductContainer ref={scrollContainerRef}>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </ProductCard>
        ))}
      </ProductContainer>
    );
  };
  
  