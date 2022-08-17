import {Wrapper} from "./index-styled"
import { CartContext } from "../../contexts/like-product.context"
import { useContext } from "react"
import Cards from "../../components/common/card/index"
import FavoritesComponents from "../../components/Favorites"
import FavoritesCard from "../../components/Favorites/card"
const Favorites = ()=>{
    const {cartItems} = useContext(CartContext)
    console.log(cartItems);
    function getValue() {
        return localStorage.getItem('i18nextLng');  
    }
    return(
        <>
                <Wrapper>
        {cartItems.map((elem)=>{
            return(
                <FavoritesCard id={elem.id} products={elem}/> 
            )
        })}
                {cartItems.length === 0 ? <FavoritesComponents/>:null}

        </Wrapper>

        </>
    )
}
export default Favorites