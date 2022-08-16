import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        width: 95%;
    }
    @media only screen and (max-width:768px) {
        div{
       display: none;
    }
    }
`
export const WrapperMedia = styled.div`
    display: none;
    @media only screen and (max-width:768px) {
    display: block;
    }
`