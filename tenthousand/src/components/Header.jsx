import React from "react";
import styled from "styled-components";
import Time from "../img/Frame 12.png";
import Text from "../img/Frame.png";

const Wrapper = styled.header`
  /* border: 1px solid blue; */
  text-align: center;
  padding-top: 140px;
  position: relative;
`;
const LogoTime = styled.img`
  border: 1px solid red;
  width: 222px;
  height: 225px;
`;

const LogoText = styled.img`
  border: 1px solid blue;
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
        <LogoTime src={Time}></LogoTime>
        <LogoText src={Text}></LogoText>
      </Wrapper>
    </>
  );
}
