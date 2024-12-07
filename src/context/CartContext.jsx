import { createContext, useState } from "react";



export const CartContext = createContext(false);

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cartProducts, setProducts] = useState([]);
    
    const addItem = (item , quantity) =>{
        
        if(isInCart(item.id)){
            console.log(cartProducts)
            setProducts(cartProducts.map(cartItem=>
                cartItem.id === item.id
                ?{...cartItem, quantity: cartItem.quantity + quantity} 
                :cartItem
            ));
        }
        else{
            
            setProducts([...cartProducts,{...item,quantity}])
        }
    };
    
    const removeItem = (itemId) => {
        setProducts(cartProducts.filter(item => item.id !== itemId))
    }
    
    



const clear = () => {
    setProducts([]);
}

const isInCart = (itemId) => {
    return cartProducts.some(item => item.id === itemId)
};



// eslint-disable-next-line no-unused-vars

return(
    <CartContext.Provider value={[
        cartProducts,
        addItem,
        removeItem,
        clear,
        isInCart,
      
    ]}>
        {children}
    </CartContext.Provider>
)

    }
