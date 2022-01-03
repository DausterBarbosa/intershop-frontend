import {
    ProductContainer,
    ProductImage,
    ProductDescription,
    ProductPrice,
    ProductButton,
    ProductButtonLabel
} from "./style";

interface ProductContainerBoxProps {
    image: string;
    description: string;
    price: string;
}

const ProductContainerBox:React.FC<ProductContainerBoxProps> = ({image, description, price}) => {
    return (
        <ProductContainer>
            <ProductImage src={image}/>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>{price}</ProductPrice>
            <ProductButton>
                <ProductButtonLabel>ADICIONAR AO CARRINHO</ProductButtonLabel>
            </ProductButton>
        </ProductContainer>
    );
}

export default ProductContainerBox;