import React, { useState } from "react";
import styled from "styled-components";
import Hand from "../img/hand.png";
import Modal from "./Modal";
import Loading from "./Loading";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66px;
  min-width: 780px;
  margin: auto;
`;

const LifeText = styled.p`
  font-family: "OTEnjoystoriesBA";
  color: #f5df4d;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 78px;
`;

const TextContainer = styled.section`
  font-family: "GmarketSansMedium";
  display: flex;
  gap: 14px;
`;

const TextSpan = styled.span`
  color: rgba(252, 238, 33, 0.3);
  font-size: 104px;
  font-weight: 700;
  padding-top: 25px;
`;

const TextExplain = styled.p`
  color: #fff;
  text-align: center;
  line-height: normal;
`;

const ExplainStrong = styled.strong`
  font-size: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  margin-top: 70px;
  font-size: 24px;
  color: #fff;
  font-family: "GmarketSansMedium";
  text-align: center;
  line-height: normal;
`;

const Input = styled.input`
  width: 228px;
  height: 57px;
  margin: 0 17px 27px;
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
  margin-bottom: 147px;
  display: inline-block;
  text-align: center;
`;

const FormImg = styled.img`
  width: 64px;
  height: 72px;
  position: relative;
  top: 45px;
`;

const TextCalWrap = styled.article`
  font-size: 24px;
  color: #fff;
  text-align: center;
  font-family: "GmarketSansMedium";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  gap: 12px;
`;

const TextStrong = styled.strong`
  font-size: 72px;
  font-weight: 700;
  color: #fff;
  display: inline-block;
  margin: 0 12pxs;
`;

const BtnWrapper = styled.article`
  margin-top: 115px;
`;
const GoBtn = styled.button`
  width: 356px;
  height: 66px;
  background: #fcee21;
  color: #5b2386;
  border-radius: 56px;
  font-size: 24px;
  font-family: "GmarketSansMedium";
  font-weight: 700;
`;

const ShareBtn = styled.button`
  width: 191px;
  height: 66px;
  background: #fff;
  color: #5b2386;
  border-radius: 56px;
  font-size: 24px;
  font-family: "GmarketSansMedium";
  font-weight: 700;
  margin-left: 18px;
`;

export default function Main() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [resultText, setResultText] = useState("");
  const [resultNumber, setResultNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTextInput = (e) => {
    const input = e.target.value;
    // 정규식을 사용하여 한글 이외의 문자를 제거
    const filteredInput = input.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
    setText(filteredInput);
  };
  const handleNumInput = (e) => {
    const input = e.target.value;
    // 정규식을 사용하여 숫자로만 구성되어 있는지 검사
    const numericInput = input.replace(/[^0-9]/g, "");
    setNumber(numericInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const trainingHours = parseInt(10000 / number);
    if (trainingHours > 0) {
      setResultNumber(trainingHours);
    } else {
      setResultNumber("");
    }
    setResultText(text);
    setLoading(false);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <MainWrapper>
        <LifeText>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</LifeText>
        <TextContainer>
          <TextSpan>“</TextSpan>
          <TextExplain>
            <ExplainStrong>1만 시간의 법칙</ExplainStrong>
            은 <br />
            어떤 분야의 전문가가 되기 위해서는
            <br /> 최소한 1만 시간의 훈련이 필요하다는 법칙이다.
          </TextExplain>
          <TextSpan>”</TextSpan>
        </TextContainer>
        <Form>
          나는
          <Input
            placeholder={"예)프로그래밍"}
            onChange={handleTextInput}
            type="text"
          />
          전문가가 될 것이다.
          <br />
          그래서 앞으로 매일 하루에
          <Input
            placeholder={"예)5시간"}
            onChange={handleNumInput}
            type="number"
          />
          시간씩 훈련할 것이다.
          <br />
          <FormBtn onClick={handleSubmit}>
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </FormBtn>
          <FormImg src={Hand} alt={"손가락 모양 이미지"} />
        </Form>
        {loading ? (
          <Loading />
        ) : (
          <>
            <TextCalWrap>
              당신은
              <TextStrong>{resultText}</TextStrong>
              전문가가 되기 위해서
            </TextCalWrap>
            <TextCalWrap>
              대략 <TextStrong>{resultNumber}</TextStrong> 일 이상 훈련하셔야
              합니다! : &#41;
            </TextCalWrap>
          </>
        )}

        <BtnWrapper>
          <GoBtn onClick={handleButtonClick}>훈련하러 가기 GO!GO!</GoBtn>
          <ShareBtn>공유하기</ShareBtn>
        </BtnWrapper>
      </MainWrapper>
      {showModal && <Modal onClose={closeModal} />}
    </>
  );
}
