import React, { useState } from "react";
import styled from "styled-components";
import Signinform from "../Components/Signinform";

const StyledSignInPage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Signinpage = () => {
  return (
    <StyledSignInPage>
      <Signinform />
    </StyledSignInPage>
  );
};

export default Signinpage;
