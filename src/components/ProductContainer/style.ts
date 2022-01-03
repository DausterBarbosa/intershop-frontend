import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    border: 1px solid #EEE;
    padding: 15px;
    border-radius: 5px;
`;

export const ProductImage = styled.img`
    width: 100%;
`;

export const ProductDescription = styled.p`
    margin-top: 10px;
    font-size: 17px;
    color: #636363;
`;

export const ProductPrice = styled.strong`
    margin-top: 10px;
    font-size: 25px;
    color: #333;
`;

export const ProductButton = styled.button`
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

    &:hover{
        opacity: 0.9;
    }
`;

export const ProductButtonLabel = styled.strong`
    font-size: 15px;
    text-align: center;
    margin: 0 auto;
`;