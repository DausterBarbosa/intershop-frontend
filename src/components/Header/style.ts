import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: #FFF;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    max-width: 1250px;
    margin: 0 auto;
`;

export const HeaderLogo = styled.a`
    font-size: 30px;
    font-weight: bold;
    color: #ff7a00;
    cursor: pointer;
`;

export const Cart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }
`;

export const CartContainer = styled.div`
    margin-left: 5px;
`;

export const CartLabel = styled.strong`
    font-size: 16px;
`;

export const CartQuant = styled.p`
    font-size: 15px;
`;