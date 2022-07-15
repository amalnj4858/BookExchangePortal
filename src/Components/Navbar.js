import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOutUser } from "../redux/userActions";

const Nav = styled.div`
	height: 10vh;
	min-height: 50px;
	background: #DA0037;
	display: flex;
	flex-wrap:wrap;
	align-items: center;
	gap: 2em;
	width: 100%;
	box-sizing: border-box;
	max-width: 100vw;
	z-index: 2;
  }
  & .main{
	display: flex;
	flex-wrap:wrap;
	align-items: center;
  }
  & .Navbar{
	  display:flex;
	  flex-wrap:wrap;
	  justify-content:center;
	  margin-left:auto;
	  margin-right:auto;
  }
  & .link {
	text-decoration: none;
	color: black;
	transition-duration: 0.3s;
	margin-left:1em;
	margin-right:1em;
	font-size:1em;
	font-weight:600;
	color:white;
	padding:0.1em;
	border-radius:0.5em;
  }
  & .home {
	margin-left: 3em;
  }
  
  & .link:hover {
	color: #081f30;
  }
  
  & .Heading{
	color:white	;
	font-family: 'Ms Madi', cursive;
	font-size:3em;
	font-weight:600;
	display:flex;
	flex-wrap:wrap;
	text-align:center;
	justify-self:center;
	margin-left:auto;
	margin-right:auto;
  }
  & .signout1{
	display: flex;
	flex-wrap:wrap;
	align-items: right;
	justify-content:center;
	margin-left: 800px;
	font-weight:800;
	border: solid black 3px;
	border-radius:5em;
	padding:0.1em;
}
  & .signout{
	display: flex;
	flex-wrap:wrap;
	align-items: right;
	justify-content:center;
	margin-left:12em;
	font-weight:800;
	border: solid black 3px;
	border-radius:5em;
	padding:0.1em;
}

  @media (max-width: 768px) {
	& .contact {
	  display: none;
	}
	& .auth {
	  display: none;
	}
	& .signout {
		margin-left:20em;
	}
	& .dropdown-img {
	  display: flex;
	  margin-left: auto;
	  margin-right: 3em;
	}
	@keyframes drop {
	  0% {
		height: 0;
	  }
	  50% {
		height: 50%;
	  }
	  100% {
		height: 100%;
	  }
	}
  }
`;

const Navbar = ({ user, signOut }) => {
  const onSignOutClick = () => {
    signOut();
  };

  return (
    <Nav className="Navbar">
      {user ? (
        user.name == "admin" ? (
          <div className="main">
            <Link to="/adminlanding" className="link home">
              Home
            </Link>
            <Link to="/adminlanding/bookpool" className="link contact">
              Book Pool
            </Link>
            <Link to="/adminlanding/requests" className="link contact">
              Requests
            </Link>
            <Link to="/adminlanding/transactions" className="link contact">
              Transactions
            </Link>
            <Link to="/adminlanding/users" className="link contact">
              Users
            </Link>
            <div className="signout1">
              <Link to="/" className="link " onClick={onSignOutClick}>
                Sign Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="main">
            <Link to="/userslanding" className="link home">
              Home
            </Link>
            <Link to="/userslanding/bookpool" className="link contact">
              Book Pool
            </Link>
            <Link to="/userslanding/lendabook" className="link contact">
              Lend a Book
            </Link>
            <Link to="/userslanding/requestabook" className="link contact">
              Request a Book
            </Link>
            <Link to="/userslanding/bookpoo" className="link contact">
              Apply for Extension
            </Link>
            <Link to="/userslanding/requestsrecieved" className="link contact">
              Requests Recieved
            </Link>
            <Link to="/userslanding/returnbook" className="link contact">
              Return Book
            </Link>
            <Link to="/userslanding/bookpoo" className="link contact">
              Dues
            </Link>
            <div className="signout">
              <Link to="/" className="link " onClick={onSignOutClick}>
                Sign Out
              </Link>
            </div>
          </div>
        )
      ) : (
        <div className="Heading">
          <div>Book Exchange Portal</div>
        </div>
      )}
    </Nav>
  );
};

const mapStateToProps = (state) => ({ user: state.users });
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
