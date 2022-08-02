import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0;
padding:16px;
height: 100%;

`
export const WrapperTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    span{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #1A1A1A;
    }
`
export const WrapperContent = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #CFD8DC;
    li{
        margin: 0;
        padding: 0;
        margin: 10px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
export const MenuFooter = styled.div`
    position: absolute;
    bottom: 16px;
    display: flex;
    img{
        margin-right: 16px;
    }
    div{
        margin: 0;
        padding: 0;
        p{
            margin: 0;
            padding: 0;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #1A1A1A;
        }
        span{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #7B8E98;
        }
        button{
            background-color: white;
            border: 1px solid #CFD8DC;
            border-radius: 87px;
            padding: 10px;
            margin-top: 16px;
        }
    }
`