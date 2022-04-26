import React from "react";
import styled from "styled-components";
import Bookrequestform from "../Components/Bookrequestform";

const Bookrequestpagestyled = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Bookrequestpage = () => {
	return (
		<Bookrequestpagestyled>
			<Bookrequestform />
		</Bookrequestpagestyled>  
	);
};

export default Bookrequestpage;
