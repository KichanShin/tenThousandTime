import React from "react";
import styled from "styled-components";
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  animation: spin 1s infinite linear;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default function Loading() {
  return (
    <>
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    </>
  );
}
