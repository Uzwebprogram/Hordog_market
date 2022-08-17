import { useState , useEffect } from "react";
import { createContext } from "react";

const  clearCartItem = (cartItems , cartItemClear) => cartItems.filter((cartItem) => cartItem.id === cartItemClear.id);
const  addCartItem =(cartItems , productToAdd)=>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem)=>cartItem.id === productToAdd.id ? 
        {...cartItem, quantity:cartItem.quantity + 1}: cartItem)
    }
 return[...cartItems , {...productToAdd,quantity:1}];
}
const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItems.quantity === 1) {
            return cartItems.filter((cartItem) => cartItem.id !==
             cartItemToRemove.id);
    } 
    return cartItems.map((cartItem)=>cartItem.id === cartItemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1}: cartItem)
}
export const CartContext = createContext({
    cartItems: [],
    addItemToCart:() => {},
    removeItemToCart:() => {},
    clearItemToCart:() => {},
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
    const removeItemToCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clearItemToCart = (cartItemClear) =>{
        setCartItems(clearCartItem(cartItems, cartItemClear))
    }
    const value ={addItemToCart , cartItems , cartCount , removeItemToCart , clearItemToCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}