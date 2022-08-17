import FavoritesCard from "../../../components/Favorites/card"
import { CartContext } from "../../../contexts/like-product.context"
import { useContext } from "react"
import { Wrapper } from "./styled-index"

const CardMap = () =>{
    const {cartItems} = useContext(CartContext)
    return(
        <Wrapper>
                {cartItems.map((elem)=>{
            return(
                <FavoritesCard  keys={elem.id} products={elem}/> 
            )
        })}
        </Wrapper>
    )
}
export default CardMap