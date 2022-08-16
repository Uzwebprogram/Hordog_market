import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
width: 216px;
align-items: flex-start;
@media only screen and (max-width: 768px) {
    width: 60%;
    margin: 0 auto;
}
@media only screen and (max-width: 508px) {
    width: 100%;
    margin: 0 auto;
    align-items: center;
    h5{
    text-align: center !important;
}
}
span:nth-child(3){
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: line-through;
    color: #1A1A1A;
}
p{
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: #F44336;
    margin-bottom: 10px;
}
span:nth-child(5){
    font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #7B8E98;
}
h5{
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #1A1A1A;
    margin-bottom: 16px;
    text-align: left;
}

`
export const CardTop = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
img{
    margin-left: auto;
}
span{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    background: #F44336;
    border-radius: 20px;
    padding-top: 2px;
    padding-left: 5px;
    padding-right: 5px;
}
`
export const News = styled.div`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    background: #03A9F4;
    border-radius: 20px;
    padding-top: 2px;
    padding-left: 5px;
    padding-right: 5px;
`