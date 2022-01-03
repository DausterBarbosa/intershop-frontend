import {Link} from "react-router-dom";

import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: #5a2d82;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    max-width: 1250px;
    margin: 0 auto;
`;

export const HeaderLogo = styled(Link)`
    font-size: 35px;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
    text-decoration: none;
`;

export const Cart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #FFF;

    &:hover{
        opacity: 0.8;
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

export const NavigationContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
`;

export const NavigationContainerItem = styled(Link)<{actual: boolean}>`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #FFF;
    font-weight: bold;
    font-size: 15px;
    text-decoration: none;
    opacity: ${props => props.actual ? "0.5" : "1"};

    & + &{
        margin-left: 20px;
    }

    svg{
        margin-right: 5px;
    }
`;

export const PanelContainer = styled.div`
    display: flex;
    align-items: center;
`;