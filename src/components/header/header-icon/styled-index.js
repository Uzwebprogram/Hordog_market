import styled from "styled-components";

export const Wrapper = styled.div`
    width: 24px;
    height: 24px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    img{
        width: 24px;
        height: 24px;
    }
    span{
        position: relative;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 9px;
        line-height: 12px;
        text-align: center;
        color: #FFFFFF;
        bottom: 12px;
        background: #01A54E;
        border: 2px solid #FED700;
        border-radius: 20px;
        color: white;
        padding: 3px 7px;
        right: 10px;
    }
`