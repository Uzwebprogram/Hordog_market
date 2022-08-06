import styled from "styled-components";
import GoogleIcons from "./../../../assets/images/home/google-icons.svg"
export const Wrapper = styled.form`
    padding: 16px;
    h6{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        color: red;
        margin-bottom: 8px;
    }
`
export const WrapperTop = styled.div`
        display: flex;
        flex-direction: column;
    span{
        align-self: flex-end;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
}
    h2{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 32px;
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom: 24px;
    }
`
export const UpdatePass = styled.span`
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #7B8E98;
margin-bottom: 24px;
`
export const Buttons = styled.div`
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    p{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #1A1A1A;
        border-radius: 87px;
        padding-top: 14px;
        padding-bottom: 14px;
        display: flex;
        align-items: center;
        padding-left: 100px;
        margin-right: 5px;
        ::before{
            content: "";
            display: flex;
            background-image: url(${GoogleIcons});
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            right: 5px;
        }
    }
    h5{
        margin: 0;
        padding: 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #1A1A1A;
        border-radius: 87px;
        padding-top: 14px;
        padding-bottom: 14px;
        display: flex;
        align-items: center;
        padding-left: 116px;
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
        border-radius: 87px;
        padding-top: 14px;
        padding-bottom: 14px;
        display: flex;
        align-items: center;
        padding-left: 93px;
    }
`