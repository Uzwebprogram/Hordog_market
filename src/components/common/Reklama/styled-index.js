import styled from "styled-components";

export const Wrapper  = styled.div`
    margin-bottom: 40px;
    border-radius: 20px;
    img{
        width: 100%;
    }
    img:nth-child(2){
        display: none;
    }
    @media only screen and (max-width : 768px) {
        img:nth-child(2){
        width: 100%;
        display: block;
    }
    img:nth-child(1){
        display: none;
    }
    }
`