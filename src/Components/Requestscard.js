import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import styled from "styled-components";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const Requestcardstyled = styled.div`
& {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

& .mainbox {
	width:25em;
	border: 2px solid black;
	display: flex;
	flex-direction: column;
	margin-top:-1em;
	margin-left:-1em;
	margin-right:-1em;
	margin-bottom:-1em;
	border-radius:2em;
}
& .topbox {
	height: 2em;    
	padding-bottom: 0.5em;
	text-align: center;
	background-color: #da0037;
	font-family: Roboto;
	text-align: bottom;
	display: flex; 
	flex-direction: column-reverse;
	font-size: 1.3rem;
	font-weight: 600;
	border-bottom: 2px solid black;
}
& .bottombox {
	background-color:#2e4353;
	padding-left:2em;
	padding-right:2em;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
}
& .lender_name{
	display:flex;
	flex-wrap:wrap;
	margin:1em;	
	gap:0.2em;
}
& .icon-desc{
	display:flex;
	flex-wrap:wrap;
	gap:1em;
	margin-left:0.2em;
}
& .flippy-front {
	border: 0.1em solid black;
   }
   & .flippy-back {
	border: 0.1em solid black;
   }

& .container-login100-form-btn {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 20px;
	margin-top:1em;
	
}
& .login100-form-btn {
	font-family: "Montserrat", sans-serif;
	font-size: 15px;
	line-height: 1.5;
	color: white;
	width: 80%;
	height: 42px;
	border-radius: 25px;
	background: #081e31;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 25px;
	transition: all 0.4s;
}
& .heading{
	text-decoration:underline;
	margin-right:0.5em;

}
& .back-side{
	background-color:#da0037;
	margin-top:-1em;
	margin-left:-1em;
	margin-right:-1em;
	margin-bottom:-1em;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	align-items:center;
	width:25em;
	height:6.2em;
}

& .login100-form-btn:hover {
	background: #DAA520;
	color:#081e31;
}
@media (max-width: 768px) {
	.desc{
		text-align:center;
		justify-content:center;
		margin-right:auto;
		margin-left:auto;
	}
	}
	
	.icon{
		margin-right:0.2em;
	}
}
@media (max-width: 992px) {
	.desc{
		text-align:center;
		justify-content:center;
		margin-right:auto;
		margin-left:auto;
	}
	
	.icon{
		margin-right:0.2em;
	}
}
`;

const Requestcard = ({ request }) => {
	const [bookname, setBookname] = useState(null);
	const [borrower, setBorrower] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`http://localhost:8080/books/getbookbyid?bookid=${request.book_id}`)
			.then((res) => setBookname(res.data.name));
		axios
			.get(`http://localhost:8080/users/findbyid?id=${request.borrower_id}`)
			.then((res) => setBorrower(res.data.name));
	}, []);

	const currentDate = new Date();

	const onAccept = (e) => {
		e.preventDefault();
		const transaction = {
			request_id: request.request_id,
			book_id: request.book_id,
			borrower_id: request.borrower_id,
			lender_id: request.lender_id,
			issue_date: new Date(),
			expected_return_date: new Date(
				currentDate.setMonth(currentDate.getMonth() + 1)
			),
			book_status: "Lent",
		};
		axios
			.post("http://localhost:8080/transactions", transaction)
			.then((res) => {
				alert(res.data);
				navigate("/userslanding", { replace: true });
			});
	};

	return (
		<Requestcardstyled>
			<Flippy flipOnHover={true} className="card">
			<FrontSide>
				<div className="mainbox">
					<div className="topbox">
						<div className="name">{bookname}</div>
					</div>
					<div className="bottombox">
						<div className="lender_name">
								<div><i class="fa fa-address-book-o" aria-hidden="true"></i></div>
								<div className="heading">Lender Name:</div>
								<div>{borrower}</div> 
						</div>
					</div>
				</div>
			</FrontSide>	
			<BackSide>
					<div className="container-login100-form-btn back-side">
					{request.status === "pending" ? (
						<button
							className="login100-form-btn"
							onClick={onAccept}
						>
							<b>Accept</b>
						</button>
					) : (
						<p>Accepted</p>
					)}
					</div>
			</BackSide>
		</Flippy>
		</Requestcardstyled>
	);
};

export default Requestcard;
