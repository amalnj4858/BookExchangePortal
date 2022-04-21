import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Nav = styled.div`
	height: 10vh;
	min-height: 50px;
	background: #9555FF;
	display: flex;
	align-items: center;
	gap: 2em;
	width: 100%;
	box-sizing: border-box;
	max-width: 100vw;
	z-index: 2;
  }
  & .line {
	border: 0;
	border-top: 2px solid #eee;
  }
  & .drop {
	padding-left: 1em;
  }
  & .link {
	text-decoration: none;
	color: black;
	transition-duration: 0.3s;
  }
  & .home {
	margin-left: 3em;
  }
  & .auth {
	margin-left: auto;
  }
  & .signup {
	margin-right: 3em;
	padding: 0.4em;
	border: 2px black solid;
	border-radius: 3em;
  }
  & .link:hover {
	color: gray;
  }
  & .signup:hover {
	background: black;
	color: #b5f7e7;
  }
  & .Heading{
	color:#b5f7e7	;
	font-family: 'Ms Madi', cursive;
	font-size:4em;
	font-weight:600;
	display:flex;
	flex-wrap:wrap;
	text-align:center;
	justify-self:center;
	margin-left:auto;
	margin-right:auto;
  }

  @media (max-width: 768px) {
	& .contact {
	  display: none;
	}
	& .auth {
	  display: none;
	}
	& .signup {
	  display: none;
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

const Navbar = ({ currentUser, history, signOutCurrentUser }) => {
  const [isVisible, setIsVisible] = useState(false);
 const onSignOutClick = () => {
  };
  return (
	<Nav className="Navbar">
	  {currentUser ? (<div>
	<Link to="/userslanding" className="link home">
		Home
	  </Link>
	  <Link to="/userslanding/bookpoo" className="link contact">
		Book Pool
	  </Link>
	  <Link to="/userslanding/lendabook" className="link contact">
		Lend A Book
	  </Link>
	  <Link to="/" className="link contact">
		Sign Out
	  </Link></div>):<div className="Heading"><div>Book  Exchange  Portal</div></div>}
	</Nav>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// const mapDispatchToProps = (dispatch) => ({
//   signOutCurrentUser: () => dispatch(signOutUser()),
// });

export default Navbar;

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

//export default withRouter(connect(mapStateToProps)(Navbar));
