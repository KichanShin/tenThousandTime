import React, { useState } from "react";
import styled from "styled-components";
import Licat from "../img/Licat.png";

const ModalWrapper = styled.article`
  width: 800px;
  height: 800px;
  border-radius: 30px;
  background: #fff;
  margin: auto;
  padding-top: 76px;
  text-align: center;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalTitle = styled.h1`
  color: #5b2386;
  text-align: center;
  font-weight: 700;
  font-size: 96px;
  font-family: "OTEnjoystoriesBA";
  margin-bottom: 4px;
`;

const ModalText = styled.p`
  color: #5b2386;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  font-family: "OTEnjoystoriesBA";
`;

const ModalImg = styled.img`
  width: 430px;
  height: 381px;
  margin-top: 33px;
`;

const ModalBtn = styled.button`
  width: 508px;
  height: 66px;
  background: #fcee21;
  color: rgba(91, 35, 134, 1);
  border-radius: 56px;
  font-size: 24px;
  font-family: "GmarketSansMedium";
  font-weight: 700;
  outline: none;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  margin-top: 25px;
`;
export default function Modal({ onClose }) {
  //   const [modalVisible, setModalVisible] = useState(true);
  //   const handleClose = (e) => {
  //     setModalVisible(false);
  //   };
  return (
    <>
      <ModalWrapper>
        <ModalTitle>화이팅!!♥♥♥</ModalTitle>
        <ModalText>당신의 꿈을 응원합니다!</ModalText>
        <ModalImg src={Licat} alt={"라이캣 사진"}></ModalImg>
        <ModalBtn onClick={onClose}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </ModalBtn>
      </ModalWrapper>
    </>
  );
}
