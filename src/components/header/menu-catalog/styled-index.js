import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0;
padding:16px;
height: 100%;

`
export const WrapperTop = styled.div`
    display: flex;
    margin-bottom: 16px;
    span{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 24px;
        color: #1A1A1A;
        margin-left: 16px;
    }
`
export  const WrapperContentList = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
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
        padding-bottom: 12px;
        border-bottom: 2px solid #CFD8DC;
    }
    li div span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #1A1A1A;
    }

    li div img{
        margin-right: 16px;
    }
    div{
        display: flex;
        align-items: center;
    }
` 
export const WrapperContent = styled.ul`
    width: 100%;
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
export const MenuFooterFlex = styled.div`
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
export const MenuFooter = styled.div`
    background-color: white;
    position: absolute;
    bottom: 16px;
    width: 90%;
    margin: 0 auto;
    ul{
        width: 80%;
        display: flex ;
        justify-content: space-around;
        list-style-type: none;
    }
   
   li:nth-child(1){
    padding-right: 5px;
   }
   li:nth-child(2){
    padding-right: 5px;
   }
   hr{
    height: 15px;
    width: 1px;
    background-color: #CFD8DC;
    color: #CFD8DC;
    display: flex;
    border: transparent;
   }
   li{
    button{
        font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            display: flex;
            align-items: center;
            color: #7B8E98;
            background-color: transparent;
            border: transparent;
    }
   }
`
export const LanWrapper = styled.div`
position: relative;
svg {
position: absolute;
top: 12px;
color: #fff;
z-index: 10;
}
.css-1d3z3hw-MuiOutlinedInput-notchedOutline {
border-width: 0 !important;
}
.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
width: 70px;
}
`