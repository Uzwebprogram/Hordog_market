import styled from "styled-components";

export const Wrapper = styled.div`
    width: 71%;
    margin: 0 auto;
    padding: 10px;

    @media only screen and (max-width:768px) {
        width: 92%;
        margin: 0 auto;
        padding: 0 10px; 
    }
    @media only screen and (max-width:634px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
