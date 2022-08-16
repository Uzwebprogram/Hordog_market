import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    margin-bottom: 40px;
    div{
        text-align: center;
    }
    h2{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 32px;
        color: #1A1A1A;

    }

    .slick-next{
        width: 40px;
        height: 40px;
        padding: 9px 8px 7px 8px;
        border-radius: 50%;
        opacity: 1 !important;
        background-color: #FED700 !important;
    }
    .slick-prev{
        width: 40px;
        height: 40px;
        padding: 9px 8px 7px 8px;
        border-radius: 50%;
        opacity: 1 !important;
        background-color: #FED700 !important;
        margin-left:  -30px;
}
@media only screen and (max-width : 768px) {
    .slick-next{
        display: none !important;
    }
    .slick-prev{
        display: none !important;
}
}
`