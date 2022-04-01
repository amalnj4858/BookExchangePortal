import React from "react";
import Signupform from "../Components/Signupform";
import styled from "styled-components";

const SignuppageStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signuppage = () => {
  return (
    <SignuppageStyled>
      <Signupform />
    </SignuppageStyled>
  );
};

export default Signuppage;
