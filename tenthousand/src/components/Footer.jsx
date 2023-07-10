import React from "react";
import styled from "styled-components";
import Logo from "../img/위니브.png";

const FooterWrapper = styled.footer`
  min-width: 780px;
  text-align: center;
  margin-top: 130px;
`;

const FooterImg = styled.img`
  width: 125px;
  height: 25px;
`;

const FooterText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 12px;
  margin: 20px 0 70px;
  font-weight: 400;
  font-family: "Noto Sans KR";
  line-height: normal;
`;
export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterImg src={Logo} alt={"위니브 로고"}></FooterImg>
        <FooterText>
          ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
          <br />
          수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
        </FooterText>
      </FooterWrapper>
    </>
  );
}
