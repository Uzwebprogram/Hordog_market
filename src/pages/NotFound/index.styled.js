import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    h1{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 46px;
        color: #1A1A1A;
        margin-top: 50px;
    }
    h3{
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 46px;
    color: #1A1A1A;
    margin-top: -50px;
    }
    span{
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 46px;
    color: #1A1A1A;
    }
    @media only screen and (max-width: 618px){
        img{
            width: 100%;
            height: auto;
        }
    }
`