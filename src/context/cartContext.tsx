import React, {createContext, useState} from "react";

interface Product {
    id: number;
    image: string;
    description: string;
    price: number;
    stock: number;
    mount?: number;
    subtotal?: number;
}

interface ContextProps {
    cartItems: Array<Product>;
    addToCart(item:Product): void;
    removeToCart(item:Product): void;
    deleteToCart(item:Product): void;
}

const CartContext = createContext<ContextProps>({} as ContextProps);

export const Cart:React.FC = ({children}) => {
    const [cartItems, setCartItems] = useState<Array<Product>>([]);

    async function addToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(product === -1){
            setCartItems([...cartItems, {
                ...item,
                mount: 1,
                subtotal: item.price
            }]);
        }else{
            if(cartItems[product].mount! + 1 <= cartItems[product].stock){
                cartItems[product].mount! += 1;
                cartItems[product].subtotal =  cartItems[product].mount! *  cartItems[product].price;

                setCartItems([...cartItems]);
            }
        }
    }

    function removeToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        if(cartItems[product].mount !== 1){
            cartItems[product].mount! -= 1;

            cartItems[product].subtotal = cartItems[product].mount! * cartItems[product].price;

            setCartItems([...cartItems]);
        }
    }

    function deleteToCart(item:Product){
        const product = cartItems.findIndex(product => product.id === item.id);

        cartItems.splice(product, 1);
        
        setCartItems([...cartItems]);
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeToCart, deleteToCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;