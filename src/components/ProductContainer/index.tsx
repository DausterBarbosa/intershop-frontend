import {
    ProductContainer,
    ProductImage,
    ProductDescription,
    ProductPrice,
    ProductButton,
    ProductButtonLabel
} from "./style";

interface ProductProps {
    id: number;
    image: string;
    description: string;
    price: number;
}

interface ProductContainerBoxProps {
    image: string;
    description: string;
    price: string;
    addToCart: () => void;
}

const ProductContainerBox:React.FC<ProductContainerBoxProps> = ({image, description, price, addToCart}) => {
    return (
        <ProductContainer>
            <ProductImage src={image}/>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>{price}</ProductPrice>
            <ProductButton onClick={addToCart}>
                <ProductButtonLabel>ADICIONAR AO CARRINHO</ProductButtonLabel>
            </ProductButton>
        </ProductContainer>
    );
}

export default ProductContainerBox;