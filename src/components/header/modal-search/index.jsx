import { Wrapper ,DataContent } from "./styled-index"
import dataImg from "./../../../assets/images/header/dataImg.svg"
const ModalSearch = ({searchdata}) =>{
    console.log(searchdata);
    return(
            <Wrapper>
                {searchdata.slice(0 , 5).map((elem)=>
                <DataContent key={elem.id}>
                    <img src={dataImg} width={40} height={40} alt="" />
                <span>{elem.name}</span>
                </DataContent>)}
            </Wrapper>
    )
}
export default ModalSearch