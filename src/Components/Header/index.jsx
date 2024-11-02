import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.jpg'
import {FaShoppingCart} from 'react-icons/fa'
import {colors} from '../../outils/styles/colors'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  background-color: #F4E3D7


`
const Styledlogo = styled.img`
  height: 70px;
  border-radius: 15px
`
const MenuContainer = styled.div`
   padding: 20px;
   align-items: center;
   display: flex;
   justify-content: space-around;
`

const StyledUl = styled.ul`
 display: flex;
 justify-content: space-between;
 padding: 20px;
 align-items: center;
 text-align: center;

`
const LinkStyled = styled(Link)`
text-decoration: none;
padding: 30px
`
const IconCart = styled(Link)`
  height: 50px;
  width: 40px
  padding:0;
`

export function Header(){

    return(
        <NavContainer>
         <Styledlogo src={Logo} alt="Logo" />
         <MenuContainer>
            <StyledUl style={{listStyle: "none"}}>
                <li ><LinkStyled to='/'  >Acceuil</LinkStyled> </li>
                <li><LinkStyled to='/Contact'  >Nous contacter</LinkStyled></li>
            </StyledUl>
            <div>
                <IconCart to='/card'><FaShoppingCart/> </IconCart>
            </div>
         </MenuContainer>
        </NavContainer>
    )
}

