import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

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

@font-face {
  font-family: 'Noto Sans KR';
  src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap') format('woff');
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
export default App;
