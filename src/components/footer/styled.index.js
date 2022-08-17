import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background: #FED700;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    ul{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0;
        list-style-type: none;
        padding-top: 40px;
        padding-bottom: 40px;
        li{
            display: flex;
            flex-direction: column;
        }   
        li:nth-child(1){
            width: 15%;
            span{
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-size: 9px;
                line-height: 12px;
                color: #1A1A1A;
            }
        }
        li:nth-child(2){
            span{
                margin-bottom: 19px;
            }
        }
        li:nth-child(3){
            span{
                margin-bottom: 19px;
            }
        }
        li:nth-child(4){
            width: 13.9%;
            h5{
                margin: 0;
                padding:0;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                color: #1A1A1A;
                margin-bottom: 16px;
            }
            h4{
                margin: 0;
                padding: 0;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                color: #1A1A1A;
            }
            h3{
                margin: 0;
                padding: 0;
                margin-top: 16px;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                color: #1A1A1A;
            }
            div{
                display: flex;
                justify-content: space-between;
            }
            span{
                display: none;
            }
        }
    }
    @media only screen and (max-width: 768px) {
        ul{
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 80%;
            margin: 0 auto;
            padding-top:20px;
            li:nth-child(1){
                display: none;
        }
        li:nth-child(2){
            display: none;
        }
        li:nth-child(3){
            display: none;
        }
        li:nth-child(4){
            width: 100%;
            margin-bottom: 20px;
            div{
               width: 70%;
               margin: 0 auto;
                margin-bottom: 12px;
            }
            span{
                display: block;
                width: 100%;
                font-family: 'Nunito';
                font-style: normal;
                font-weight: 400;
                font-size: 9px;
                line-height: 12px;
                text-align: center;
                color: #1A1A1A;

            }
            h3{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #1A1A1A;
            }
        }
        }
    }
`