import { createGlobalStyle } from "styled-components";
import { Poppins } from "google-fonts";

export const StyleGlobal = createGlobalStyle`
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Inconsolata', monospace; */
/* } */
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
    user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
html{
    background-color: #0a0a0a;
    color: rgb(223, 223, 223);
    background-color: black;
}
::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`
//  #b3ff00