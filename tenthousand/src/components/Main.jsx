import React from "react";
import styled from "styled-components";
import Hand from "../img/hand.png";

const MainWrapper = styled.main`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
`;

const LifeText = styled.p`
  /* width: 486px; */
  border: 1px solid black;
  font-family: "OTEnjoystoriesBA";
  color: #f5df4d;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 78px;
`;

const TextContainer = styled.section`
  font-family: "GmarketSansMedium";
  /* border: 1px solid violet; */
  display: flex;
  gap: 14px;
`;

const TextSpan = styled.span`
  color: rgba(252, 238, 33, 0.3);
  font-size: 104px;
  font-weight: 700;
  border: 1px solid blue;
  padding-top: 25px;
`;

const TextExplain = styled.p`
  color: #fff;
  text-align: center;
  line-height: normal;
`;

const Form = styled.form`
  margin-top: 70px;
  border: 1px solid black;
  font-size: 24px;
  color: #fff;
  font-family: "GmarketSansMedium";
  text-align: center;
  line-height: normal;
`;

const Input = styled.input`
  width: 228px;
  height: 57px;
  margin-bottom: 27px;
  font-size: 24px;
  border-radius: 7px;
  text-align: center;
  border: none;
`;

const FormBtn = styled.button`
  width: 565px;
  height: 66px;
  border-radius: 56px;
  background: #fcee21;
  color: #5b2386;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-top: 115px;
`;

const FormImg = styled.img`
  width: 64px;
  height: 72px;
  position: relative;
  top: 45px;
`;
export default function Main() {
  return (
    <>
      <MainWrapper>
        <LifeText>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</LifeText>
        <TextContainer>
          <TextSpan>“</TextSpan>
          <TextExplain>
            <strong style={{ fontSize: "24px", fontWeight: "700" }}>
              1만 시간의 법칙
            </strong>
            은 <br />
            어떤 분야의 전문가가 되기 위해서는
            <br /> 최소한 1만 시간의 훈련이 필요하다는 법칙이다.
          </TextExplain>
          <TextSpan>”</TextSpan>
        </TextContainer>
        <Form>
          나는 <Input placeholder={"예)프로그래밍"} /> 전문가가 될 것이다.
          <br />
          그래서 앞으로 매일 하루에 <Input placeholder={"예)5시간"} /> 시간씩
          훈련할 것이다.
          <FormBtn>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</FormBtn>
          <FormImg src={Hand} />
        </Form>
      </MainWrapper>
    </>
  );
}
