import styled from 'styled-components'


const FooterContainer = styled.footer`
  background-color: #88b04b; /* Couleur primaire */
  color: #fae3d7; /* Couleur de texte */
  padding: 2rem 0;
  text-align: center;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fae3d7;
  cursor: pointer;
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #fae3d7;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #8abad3; /* Couleur secondaire */
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Copyright = styled.div`
  font-size: 0.875rem;
  color: #4a4a4a; /* Couleur de texte */
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export function Footer(){
    return(
        <FooterContainer>
            <FooterContent>
            <Logo>EcoShop</Logo>
        
         <Links>
        
          <a href="#about">Facebook</a>
          <a href="#contact">tiktok</a>
          <a href="#faq">instagram</a>
          <a href="#privacy">youtube</a>
        </Links>
       </FooterContent>
         <Copyright>
            &copy; {new Date().getFullYear()} EcoShop. Tous droits reserves
         </Copyright>
        </FooterContainer>
    )
}

