import NotFoundGif from "./../../assets/images/NotFound/bg.gif"
import { Wrapper } from "./index.styled"
const NotFound = () =>{
    return(
        <Wrapper>
        <h1>404</h1>
        <img src={NotFoundGif} width={600} height={450} alt={NotFoundGif} />
        <h3>Похоже, ты потерялся</h3>
        <span>Страница, которую вы ищете, недоступна</span>
        </Wrapper>
    )
}
export default NotFound