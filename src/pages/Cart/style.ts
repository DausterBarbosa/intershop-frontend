import styled from "styled-components";

export const CartContainer = styled.div`
    margin-top: 100px;
    max-width: 1000px;
    margin: 100px auto 20px;
    display: flex;
    justify-content: space-between;
`;

export const ProductList = styled.div`
    
`;

export const ProductContainer = styled.div`
    background: #FFF;
    border-radius: 7px;
    width: 600px;

    & + &{
        margin-top: 10px;
    }
`;

export const ProductContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ItemImage = styled.img`
    width: 100px;
`;

export const ItemInfoContainer = styled.div`
    max-width: 550px;
`;

export const ItemInfoDescription= styled.p``;

export const ItemInfoPrice = styled.strong``;

export const ProductContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 2px solid #EEE;
`;

export const QuantContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const QuantContainerLabel = styled.strong``;

export const QuantContainerPanel = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const QuantContainerPanelInput = styled.input`
    text-align: center;
    padding: 5px;
    font-size: 15px;
    border: 1px solid #c0c0c0;
    width: 70px;
    border-radius: 7px;
    margin: 0 5px;
    outline: none;
`;

export const ProductContainerFooterPrice = styled.strong`
    font-size: 20px;
`;

export const SidePanel = styled.div`
    background: #FFF;
    width: 300px;
    border-radius: 7px;
    padding: 0 15px 10px;
    height: max-content;
`;

export const SidePanelItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    & + &{
        border-top: 1px solid #EEE;
    }
`;

export const SidePanelLabel = styled.strong``;

export const SidePanelPrice = styled.strong``;

export const SidePanelButton = styled.button`
    margin-top: 10px;
    background: #ff881a;
    border: none;
    display: flex;
    align-items: center;
    color: #FFF;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    padding: 15px;
    width: 100%;

    &:hover{
        opacity: 0.9;
    }
`;

export const SidePanelButtonLabel = styled.strong`
    font-size: 15px;
    text-align: center;
    margin: 0 auto;
`;