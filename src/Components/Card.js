import React from "react";
import styled from "styled-components";

const Cardstyled = styled.div`
	
	& .main{
		height: 10em;
		display: flex;
		flex-wrap:wrap;
		align-items: center;
		justify-content: center;
		margin:5em;
		gap:3em;
	}
	& .box {
		background-color:#da0037;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom:2em;
		border:2px solid white;
		gap:1em;
		text-align:left;
		padding:1em;
	}
	& .items{
		gap:1em;
	}
`;

const Card = ({ data }) => {
	return (
		<Cardstyled>
			<div className="main">
			{data.map((row) => (
				<div className="box">
					{Object.keys(row).map((key) => (
						<div className="items">
							{key} : {row[key]}
						</div>
					))}
				</div>
			))}
			</div>
		</Cardstyled>
	);
};

export default Card;



