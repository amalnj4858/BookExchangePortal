import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionCard } from "./OptionCard.js";
import bookPoolPhoto from "../Assets/bookPool.jpg";
import applyExtension from "../Assets/applyExtension.png";
import currentLendings from "../Assets/currentLendings.jpg";
import lendBook from "../Assets/lendBook.png";
import myProfile from "../Assets/myProfile.jpg";
import payDues from "../Assets/payDues.jpg";
import returnBook from "../Assets/returnBook.jpg";
import requests from "../Assets/requests.jpg";
import users from "../Assets/users.jpg";
import transactions from "../Assets/transactions.jpg";
import requestsrecieved from "../Assets/requestreceived.png";
import requestbook from "../Assets/requestbook.jpg";

const LandingPageOptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  & .main {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    justify-content: center;
    align-items: center;
    margin-left: 7em;
    margin-right: 7em;
  }
  & .link {
    text-decoration: none;
  }
`;

const LandingPageOptions = ({ loggedin }) => {
  return (
    <LandingPageOptionsStyled>
      {loggedin === "admin" ? (
        <div className="main">
          <Link className="link" to="/adminlanding/users">
            <OptionCard name={"Users"} photoURL={users} />
          </Link>
          <Link className="link" to="/adminlanding/bookpool">
            <OptionCard name={"Book Pool"} photoURL={bookPoolPhoto} />
          </Link>
          <Link className="link" to="/adminlanding/transactions">
            <OptionCard name={"Transactions"} photoURL={transactions} />
          </Link>
          <Link className="link" to="/adminlanding/requests">
            <OptionCard name={"Requests"} photoURL={requests} />
          </Link>
        </div>
      ) : (
        <div className="main">
          <Link className="link" to="/userslanding/bookpool">
            <OptionCard name={"Book Pool"} photoURL={bookPoolPhoto} />
          </Link>
          <Link className="link" to="/userslanding/profile">
            <OptionCard name={"My Profile"} photoURL={myProfile} />
          </Link>
          <Link className="link" to="/userslanding/lendings">
            <OptionCard name={"Current Lendings"} photoURL={currentLendings} />
          </Link>
          <Link className="link" to="/userslanding/lendabook">
            <OptionCard name={"Lend a Book"} photoURL={lendBook} />
          </Link>
          <Link className="link" to="/userslanding/requestabook">
            <OptionCard name={"Request a Book"} photoURL={requestbook} />
          </Link>
          <Link className="link" to="/userslanding/extension">
            <OptionCard
              name={"Apply for Extension"}
              photoURL={applyExtension}
            />
          </Link>
          <Link className="link" to="/userslanding/requestsrecieved">
            <OptionCard
              name={"Requests Recieved"}
              photoURL={requestsrecieved}
            />
          </Link>
          <Link className="link" to="/userslanding/returnbook">
            <OptionCard name={"Return a Book"} photoURL={returnBook} />
          </Link>
          <Link className="link" to="/userslanding/paydues">
            <OptionCard name={"Pay Dues"} photoURL={payDues} />
          </Link>
        </div>
      )}
    </LandingPageOptionsStyled>
  );
};

export default LandingPageOptions;
