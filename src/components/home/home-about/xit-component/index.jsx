
import Cards from "../../.././common/card/index"
import Sliders from "../../../common/Slider/index"
import { XitProductContext } from "../../../../contexts/xit-product.context"
import {CartContext} from "./../../../../contexts/like-product.context"
import { useContext } from "react"
const XitComponent = ()=>{
    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    const {xitProduct} = useContext(XitProductContext)
    return(
        <>
        <Sliders title="Хиты" Speed={2000}>
        {xitProduct.map((elem)=>
         <Cards  keys={elem.id}  products={elem}/>)}
         </Sliders>
        </>
    )
}
export default XitComponent