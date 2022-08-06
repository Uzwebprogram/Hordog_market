import styled from "styled-components";

export const Wrapper = styled.div`
    display: none;
    @media only screen and (max-width: 768px){
        z-index: 1000;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #FED700;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow-x: auto;
    -webkit-box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px -4px 8px rgba(96, 97, 112, 0.16);
            box-shadow: 0px 0px 2px rgba(40, 41, 61, 0.04), 0px -4px 8px rgba(96, 97, 112, 0.16);
    }
`
export const NavLink_Footer = styled.a`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    min-width: 50px;
    overflow: hidden;
    white-space: nowrap;
    font-family: sans-serif;
    font-size: 13px;
    color: #444444;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-transition: background-color 0.1s ease-in-out;
    transition: background-color 0.1s ease-in-out;
`
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
