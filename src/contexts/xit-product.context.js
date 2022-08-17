import { createContext, useState } from "react";
import XitProduct from "./../data/xit-product.json"

export const XitProductContext = createContext({
    xitProduct : []
})

export const XitProductProvider = ({children})=>{
    const [xitProduct , setXitProduct] = useState(XitProduct);
    const value = {xitProduct}
    return(    
    <XitProductContext.Provider value={value}>{children}</XitProductContext.Provider>
)}