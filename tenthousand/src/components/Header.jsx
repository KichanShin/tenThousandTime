import React from "react";
import styled from "styled-components";
import Time from "../img/Frame 12.png";
import Text from "../img/Frame.png";

const Wrapper = styled.header`
  text-align: center;
  padding-top: 140px;
  position: relative;
  max-width: 780px;
  margin: auto;
`;
const LogoTime = styled.img`
  width: 222px;
  height: 225px;
`;

const LogoText = styled.img`
  width: 564px;
  height: 112px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 74px;
`;

export default function Header() {
  return (
    <>
      <Wrapper>
        <LogoTime src={Time} alt={"시계모양 이미지"}></LogoTime>
        <LogoText src={Text} alt={"1만시간의법칙 이미지"}></LogoText>
      </Wrapper>
    </>
  );
}
