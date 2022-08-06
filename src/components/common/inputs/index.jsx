import { Inputs } from "./styled-index"
const Input = ({type , placeholder , onChange , marginBottom ,name , value}) =>{
    return(
        <>
                    <Inputs type={type} placeholder={placeholder} required value={value} name={name} style={{marginBottom : marginBottom}} onChange={onChange} />
        </>
    )
}
export default Input