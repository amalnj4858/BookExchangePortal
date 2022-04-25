import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionCard } from "./OptionCard.js";
import  bookPoolPhoto from "../Assets/bookPool.jpg"

const LandingPageOptionsStyled = styled.div`
	display: flex;
	flex-direction: column;
	& .main{
		display:flex;
		flex-wrap:wrap;
		gap:2em;
		margin-left:7em;
		margin-right:7em;
		justify-content:center;
	}
	& .link{
		text-decoration:none;
	}
`;

const LandingPageOptions = () => {
	return (
		<LandingPageOptionsStyled>
			<div className="main">
			<Link className="link" to="/userslanding/bookpool">
				<OptionCard name={"Book Pool"} photoURL={bookPoolPhoto }/>
			</Link>
			<Link to="/userslanding/lendabook" className="link"><OptionCard name={"Lend a Book"} /></Link>
			<Link to="/userslanding/requestabook" className="link"><OptionCard name={"Request a Book"} /></Link>
			<OptionCard name={"Apply for Extension"} />
			<Link to="/userslanding/requestsrecieved" className="link"><OptionCard name={"Requests Recieved"} /></Link>
			<OptionCard name={"Return Book"} />
			<OptionCard name={"Dues to be paid"} />
			</div>
		</LandingPageOptionsStyled>
	);
};

export default LandingPageOptions;
