import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body::-webkit-scrollbar{
    width:.5em;
    background:#eee;
  }
  body::-webkit-scrollbar-thumb{
    background-color:#1A8E6E;outline:1px solid #eee;
  }
  body {
    background: linear-gradient(0deg, #eee, #fff);
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: #555;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    border: 0;
  }
  button {
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.3s;
    &:hover { opacity: 1; }
  }
  a {
    color: #1985AA;
    text-decoration: none;
    opacity: 0.90;
    transition: opacity 0.3s;
    &:hover { opacity: 1; }
  }
  ul {
	  list-style:none;
  }
`;
