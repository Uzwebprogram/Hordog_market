import { Wrapper } from "./styled-index"

const HeaderIcon =({Image , count})=>{

    return(
        <Wrapper>
        <img width={24} height={24} src={Image} alt="Icon" />
        <span>{count}</span>
        </Wrapper>
    )
}
export default HeaderIcon