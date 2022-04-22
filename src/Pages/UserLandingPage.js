import React from "react";
import styled from "styled-components";
import LandingPageOptions from "../Components/LandingPageOptions";

const UserLandingPageStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;
const UserLandingPage = () => {
	return (
		<UserLandingPageStyled>
			<LandingPageOptions />
		</UserLandingPageStyled>
	);
};

export default UserLandingPage;
