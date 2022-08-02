import styled from "styled-components";
 
export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 100;
    margin-top: -6px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 560px) {
        align-items: flex-start;
    }
`
export const DataContent = styled.div`
    display: flex;
    margin-bottom: 24px;
    span{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #1A1A1A;
        display: flex;
        align-items: center;
    }
`