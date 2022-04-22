import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionCard } from "./OptionCard.js";

const LandingPageOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const LandingPageOptions = () => {
  return (
    <LandingPageOptionsStyled>
      <Link to="/userslanding/bookpool">
        <OptionCard name={"Book Pool"} />
      </Link>

      <Link to="/userslanding/lendabook">LEND A BOOK</Link>
      <Link to="/userslanding/requestabook">REQUEST A BOOK</Link>
      <p>APPLY FOR EXTENSION</p>
      <Link to="/userslanding/requestsrecieved">REQUESTS RECIEVED</Link>
      <p>RETURN BOOK</p>
      <p>DUES TO BE PAID</p>
    </LandingPageOptionsStyled>
  );
};

export default LandingPageOptions;
