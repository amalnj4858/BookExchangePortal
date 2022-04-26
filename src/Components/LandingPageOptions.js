import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionCard } from "./OptionCard.js";
import bookPoolPhoto from "../Assets/bookPool.jpg";

const LandingPageOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  & .main {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    margin-left: 7em;
    margin-right: 7em;
    justify-content: center;
  }
  & .link {
    text-decoration: none;
  }
`;

const LandingPageOptions = ({ loggedin }) => {
  return (
    <LandingPageOptionsStyled>
      {loggedin === "admin" ? (
        <>
          <p>USERS</p>
          <p>BOOKS</p>
          <p>TRANSACTIONS</p>
          <p>REQUESTS</p>
        </>
      ) : (
        <>
          <Link className="link" to="/userslanding/bookpool">
            <OptionCard name={"Book Pool"} />
          </Link>
          <Link className="link" to="/userslanding/profile">
            <OptionCard name={"My Profile"} />
          </Link>
          <Link className="link" to="/userslanding/lendabook">
            <OptionCard name={"Lend a Book"} />
          </Link>
          <Link className="link" to="/userslanding/requestabook">
            <OptionCard name={"Request a Book"} />
          </Link>
          <p>APPLY FOR EXTENSION</p>
          <Link className="link" to="/userslanding/requestsrecieved">
            <OptionCard name={"Requests Recieved"} />
          </Link>
          <Link className="link" to="/userslanding/returnbook">
            <OptionCard name={"Return a Book"} />
          </Link>
          <Link className="link" to="/userslanding/paydues">
            <OptionCard name={"Pay Dues"} />
          </Link>
        </>
      )}
    </LandingPageOptionsStyled>
  );
};

export default LandingPageOptions;
