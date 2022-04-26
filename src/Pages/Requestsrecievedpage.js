import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Requestcard from "../Components/Requestscard";
import { connect } from "react-redux";

const Requestsrecievedpagestyled = styled.div`
	height: 100%;
	display:flex;
	flex-direction:column;

	& .requests{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap:wrap;
	gap:2em;
	}
	& .heading1{
		color:white	;
		font-family: 'Square Peg', cursive;
		font-size	:3em;
		margin-top:0.5em;
		margin-bottom:0.5em;
	}
`;

const Requestsrecievedpage = ({ user }) => {
	const [requests, setRequests] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/requests?id=${user.id}`)
			.then((res) => setRequests(res.data))
			.catch((err) => alert(err));
	}, []);
	console.log(requests); 
	return (
		<Requestsrecievedpagestyled>
			<div className="heading1">REQUESTS RECIEVED</div>
			<div className="requests">
			{requests.length > 0 ? (
				requests.map((request) => <Requestcard request={request} />)
			) : (
				<h3>NO REQUEST RECIEVED</h3>
			)}
			</div>
		</Requestsrecievedpagestyled>
	);
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Requestsrecievedpage);
