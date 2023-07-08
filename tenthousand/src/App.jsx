import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import Main from "./components/Main";
const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'OTEnjoystoriesBA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    box-sizing: border-box;
    }
 body{
  background-color: rgba(91, 35, 134, 1);
 }   

`;

const Footer = styled.footer``;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Main>z</Main>
      <Footer>z</Footer>
    </>
  );
}
export default App;
