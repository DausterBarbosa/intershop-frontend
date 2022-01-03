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

function Cart(){
    return (
        <CartContainer>
            <ProductList>
                <ProductContainer>
                    <ProductContainerHeader>
                        <ItemContainer>
                            <ItemImage src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=32172497"/>
                            <ItemInfoContainer>
                                <ItemInfoDescription>Camisa do flamendo feita de algodão importado</ItemInfoDescription>
                                <ItemInfoPrice>R$ 500,00</ItemInfoPrice>
                            </ItemInfoContainer>
                        </ItemContainer>
                        <RiDeleteBin7Fill size={25} color="#5a2d82" cursor="pointer"/>
                    </ProductContainerHeader>
                    <ProductContainerFooter>
                        <QuantContainer>
                            <QuantContainerLabel>Quantidade:</QuantContainerLabel>
                            <QuantContainerPanel>
                                <AiOutlinePlusCircle size={25} color="#5a2d82" cursor="pointer"/>
                                <QuantContainerPanelInput readOnly value={1}/>
                                <AiOutlineMinusCircle size={25} color="#5a2d82" cursor="pointer"/>
                            </QuantContainerPanel>
                        </QuantContainer>
                        <ProductContainerFooterPrice>R$ 500,00</ProductContainerFooterPrice>
                    </ProductContainerFooter>
                </ProductContainer>
                <ProductContainer>
                    <ProductContainerHeader>
                        <ItemContainer>
                            <ItemImage src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=32172497"/>
                            <ItemInfoContainer>
                                <ItemInfoDescription>Camisa do flamendo feita de algodão importado</ItemInfoDescription>
                                <ItemInfoPrice>R$ 500,00</ItemInfoPrice>
                            </ItemInfoContainer>
                        </ItemContainer>
                        <RiDeleteBin7Fill size={25} color="#5a2d82" cursor="pointer"/>
                    </ProductContainerHeader>
                    <ProductContainerFooter>
                        <QuantContainer>
                            <QuantContainerLabel>Quantidade:</QuantContainerLabel>
                            <QuantContainerPanel>
                                <AiOutlinePlusCircle size={25} color="#5a2d82" cursor="pointer"/>
                                <QuantContainerPanelInput readOnly value={1}/>
                                <AiOutlineMinusCircle size={25} color="#5a2d82" cursor="pointer"/>
                            </QuantContainerPanel>
                        </QuantContainer>
                        <ProductContainerFooterPrice>R$ 500,00</ProductContainerFooterPrice>
                    </ProductContainerFooter>
                </ProductContainer>
                <ProductContainer>
                    <ProductContainerHeader>
                        <ItemContainer>
                            <ItemImage src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=32172497"/>
                            <ItemInfoContainer>
                                <ItemInfoDescription>Camisa do flamendo feita de algodão importado</ItemInfoDescription>
                                <ItemInfoPrice>R$ 500,00</ItemInfoPrice>
                            </ItemInfoContainer>
                        </ItemContainer>
                        <RiDeleteBin7Fill size={25} color="#5a2d82" cursor="pointer"/>
                    </ProductContainerHeader>
                    <ProductContainerFooter>
                        <QuantContainer>
                            <QuantContainerLabel>Quantidade:</QuantContainerLabel>
                            <QuantContainerPanel>
                                <AiOutlinePlusCircle size={25} color="#5a2d82" cursor="pointer"/>
                                <QuantContainerPanelInput readOnly value={1}/>
                                <AiOutlineMinusCircle size={25} color="#5a2d82" cursor="pointer"/>
                            </QuantContainerPanel>
                        </QuantContainer>
                        <ProductContainerFooterPrice>R$ 500,00</ProductContainerFooterPrice>
                    </ProductContainerFooter>
                </ProductContainer>
            </ProductList>
            <SidePanel>
                <SidePanelItem>
                    <SidePanelLabel>Subtotal (3 itens)</SidePanelLabel>
                    <SidePanelPrice>R$ 500,00</SidePanelPrice>
                </SidePanelItem>
                <SidePanelItem>
                    <SidePanelLabel>Desconto</SidePanelLabel>
                    <SidePanelPrice>R$ 0,00</SidePanelPrice>
                </SidePanelItem>
                <SidePanelItem>
                    <SidePanelLabel>Valor total</SidePanelLabel>
                    <SidePanelPrice>R$ 500,00</SidePanelPrice>
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