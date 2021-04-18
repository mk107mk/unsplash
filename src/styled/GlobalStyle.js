import {createGlobalStyle} from "styled-components";

export const GlobalStyle= createGlobalStyle`
  *{
    padding: 0 ;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    line-height: 1;
  }
  img{
    vertical-align: top;
    max-width: 100%;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }  
  
`;