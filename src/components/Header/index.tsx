import {useLocation} from "react-router-dom";

import {GiBrazilFlag, GiPoloShirt} from "react-icons/gi";
import {BiWorld} from "react-icons/bi";
import {BsCart2} from "react-icons/bs"

import {
    HeaderContainer,
    HeaderLogo,
    Cart,
    CartContainer,
    CartLabel,
    CartQuant,
    HeaderWrapper,
    NavigationContainer,
    NavigationContainerItem,
    PanelContainer
} from "./style";

function Header(){
    const {pathname} = useLocation();

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <PanelContainer>
                    <HeaderLogo to="/">INTERSHOP</HeaderLogo>
                    <NavigationContainer>
                        <NavigationContainerItem to="/" actual={pathname === "/"}><GiBrazilFlag size={20} color="#FFF"/>Nacionais</NavigationContainerItem>
                        <NavigationContainerItem to="/internacionais" actual={pathname === "/internacionais"}><BiWorld size={20} color="#FFF"/>Internacionais</NavigationContainerItem>
                        <NavigationContainerItem to="/exclusivas" actual={pathname === "/exclusivas"}><GiPoloShirt size={20} color="#FFF"/>Exclusivas</NavigationContainerItem>
                    </NavigationContainer>
                </PanelContainer>
                <Cart>
                    <BsCart2 size={30} color="#FFF"/>
                    <CartContainer>
                        <CartLabel>Meu Carrinho</CartLabel>
                        <CartQuant>0 item(s)</CartQuant>
                    </CartContainer>
                </Cart>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default Header;