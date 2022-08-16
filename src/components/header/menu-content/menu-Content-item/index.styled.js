import styled from "styled-components";
 
export const Wrapper = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #CFD8DC;
    @media only screen and (max-width:320px) {
        height: 100px;
    overflow: scroll;
    }
    li{
        margin: 0;
        padding: 0;
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #1A1A1A;
    }
    li div span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #1A1A1A;
    }
    li:nth-child(5){
        margin-bottom: 28px;
    }
    li div img{
        margin-right: 16px;
    }
    div{
        display: flex;
        align-items: center;
    }
`