import React from "react";
import styled from "styled-components";

const LandingPageOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const LandingPageOptions = () => {
  return (
    <LandingPageOptionsStyled>
      <p>BOOK POOL</p>
      <p>CURRENT LENDINGS</p>
      <p>LEND A BOOK</p>
      <p>REQUEST A BOOK</p>
      <p>APPLY FOR EXTENSION</p>
      <p>REQUESTS RECIEVED</p>
      <p>RETURN BOOK</p>
      <p>DUES TO BE PAID</p>
    </LandingPageOptionsStyled>
  );
};

export default LandingPageOptions;
