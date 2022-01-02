import {BsCart2} from "react-icons/bs"

import {
    HeaderContainer,
    HeaderLogo,
    Cart,
    CartContainer,
    CartLabel,
    CartQuant,
    HeaderWrapper
} from "./style";

function Header(){
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderLogo>INTERSHOP</HeaderLogo>
                <Cart>
                    <BsCart2 size={30} color="#ff7a00"/>
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