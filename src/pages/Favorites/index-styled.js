import styled from "styled-components";
import closeIcon from "./../../assets/images/Favorites/close-icon.svg"
export const Wrapper = styled.div`
    width: 71%;
    margin: 0 auto;
    padding: 10px;
    span:nth-child(1){
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #7B8E98;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 20px;
        ::before{
            content: "";
            background-image: url(${closeIcon});
            display: block;
            background-repeat: no-repeat;
            font-family: 'Nunito';
            font-style: normal;
            width: 8px;
            height: 12px;
            position: relative;
            right: 5px;
        }
    }
    @media only screen and (max-width:768px) {
        width: 92%;
        margin: 0 auto;
        padding: 0 10px; 
            span:nth-child(1){
                display: none;
    }
    }
    @media only screen and (max-width:634px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
