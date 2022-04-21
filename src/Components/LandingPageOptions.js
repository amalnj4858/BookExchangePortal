import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OptionCard } from "./OptionCard.js"

const LandingPageOptionsStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

const LandingPageOptions = () => {

	return (
		<LandingPageOptionsStyled>
			<Link to="/userslanding/bookpool">
				<OptionCard name={"Book Pool"}/>
			</Link>
			
			<Link to="/userslanding/lendabook">LEND A BOOK</Link>
			<p>REQUEST A BOOK</p>
			<p>APPLY FOR EXTENSION</p>
			<p>REQUESTS RECIEVED</p>
			<p>RETURN BOOK</p>
			<p>DUES TO BE PAID</p>
		</LandingPageOptionsStyled>
	);

};

export default LandingPageOptions;
