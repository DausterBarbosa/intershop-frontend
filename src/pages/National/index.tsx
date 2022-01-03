import {useEffect, useState, useContext} from "react";

import Api from "../../services/api";

import CartContext from "../../context/cartContext";

import GridProduct from "../../components/GridProduct";
import ProductContainer from "../../components/ProductContainer";
import { formatPrice } from "../../utils/format";

interface ProductProps {
    id: number;
    image: string;
    description: string;
    price: number;
    stock: number;
}

function National(){
    const {addToCart} = useContext(CartContext);

    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function handleRequest(){
            const {data} = await Api.get("/nacionais");

            setProducts(data);
        }

        handleRequest();
    }, []);

    return (
        <GridProduct>
            {products.map((product) => (
                <ProductContainer
                    key={product.id}
                    image={product.image}
                    description={product.description}
                    price={formatPrice(product.price)}
                    addToCart={() => addToCart(product)}
                />
            ))}
        </GridProduct>
    );
}

export default National;