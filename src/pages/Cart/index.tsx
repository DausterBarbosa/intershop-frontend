import {useContext, useState, useEffect} from "react";

import CartContext from "../../context/cartContext";

import {RiDeleteBin7Fill} from "react-icons/ri";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";

import {
    CartContainer,
    ProductList,
    ProductContainer,
    SidePanel,
    ProductContainerHeader,
    ItemContainer,
    ItemImage,
    ItemInfoDescription,
    ItemInfoContainer,
    ItemInfoPrice,
    ProductContainerFooter,
    QuantContainer,
    QuantContainerLabel,
    QuantContainerPanel,
    ProductContainerFooterPrice,
    QuantContainerPanelInput,
    SidePanelLabel,
    SidePanelPrice,
    SidePanelItem,
    SidePanelButton,
    SidePanelButtonLabel
} from "./style";
import { formatPrice } from "../../utils/format";

function Cart(){
    const {cartItems, addToCart, removeToCart, deleteToCart} = useContext(CartContext);

    const [totalItens, setTotalItems] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((prev, next) => {
            return prev + next.mount!;
        }, 0);

        setTotalItems(total);
    }, [cartItems]);

    useEffect(() => {
        const total = cartItems.reduce((prev, next) => {
            return prev + next.subtotal!;
        }, 0);

        setTotalValue(total);
    }, [cartItems]);

    return (
        <CartContainer>
            <ProductList>
                {cartItems.map((product) => (
                    <ProductContainer>
                    <ProductContainerHeader>
                        <ItemContainer>
                            <ItemImage src={product.image}/>
                            <ItemInfoContainer>
                                <ItemInfoDescription>{product.description}</ItemInfoDescription>
                                <ItemInfoPrice>{formatPrice(product.price)}</ItemInfoPrice>
                            </ItemInfoContainer>
                        </ItemContainer>
                        <RiDeleteBin7Fill size={25} color="#5a2d82" cursor="pointer" onClick={() => deleteToCart(product)}/>
                    </ProductContainerHeader>
                    <ProductContainerFooter>
                        <QuantContainer>
                            <QuantContainerLabel>Quantidade:</QuantContainerLabel>
                            <QuantContainerPanel>
                                <AiOutlinePlusCircle size={25} color="#5a2d82" cursor="pointer" onClick={() => addToCart(product)}/>
                                <QuantContainerPanelInput readOnly value={product.mount}/>
                                <AiOutlineMinusCircle size={25} color="#5a2d82" cursor="pointer" onClick={() => removeToCart(product)}/>
                            </QuantContainerPanel>
                        </QuantContainer>
                        <ProductContainerFooterPrice>{formatPrice(Number(product.subtotal))}</ProductContainerFooterPrice>
                    </ProductContainerFooter>
                </ProductContainer>
                ))}
            </ProductList>
            <SidePanel>
                <SidePanelItem>
                    <SidePanelLabel>Subtotal ({totalItens} item(s))</SidePanelLabel>
                    <SidePanelPrice>{formatPrice(totalValue)}</SidePanelPrice>
                </SidePanelItem>
                <SidePanelItem>
                    <SidePanelLabel>Desconto</SidePanelLabel>
                    <SidePanelPrice>R$ 0,00</SidePanelPrice>
                </SidePanelItem>
                <SidePanelItem>
                    <SidePanelLabel>Valor total</SidePanelLabel>
                    <SidePanelPrice>{formatPrice(totalValue)}</SidePanelPrice>
                </SidePanelItem>
                <SidePanelButton>
                    <SidePanelButtonLabel>
                        FINALIZAR COMPRA
                    </SidePanelButtonLabel>
                </SidePanelButton>
            </SidePanel>
        </CartContainer>
    )
}

export default Cart;