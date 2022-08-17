import { useState , useEffect } from "react";
import { createContext } from "react";

const  addCartItem =(cartItems , productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? 
        {...cartItem, quantity:cartItem.quantity + 1}: cartItem)
    }
 return[...cartItems , {...productToAdd,quantity:1}];
}

export const CartContext = createContext({
    cartItems: [],
    addItemToCart:() => {},
    cartCount : 0,
})

export const AddCartProvider = ({children})=>{
    const [cartItems , setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
      const  newCartCount  = cartItems.reduce((total, cartItem)=>total + cartItem.quantity, 0)

      setCartCount(newCartCount)
    }, [cartItems])
    
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value ={addItemToCart , cartItems , cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}