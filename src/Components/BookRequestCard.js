import React, { useState, useEffect } from "react";
import styled from "styled-components";
 import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
import Flippy, { FrontSide, BackSide } from "react-flippy";


const BookRequestCardStyled = styled.div`
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

const BookRequestCard = ({
	user,
	name,
	lender_name,
}) => {

	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		if (user === null) {
			alert("Please login to continue");
			return;
		}

		axios
			.get(`http://localhost:8080/users/findbyid?id=${user.id}`)
			.then((res) => {
				if (res.data.due_amt === 0) {
					axios
						.get(
							`http://localhost:8080/books/getbook?name=${name}&lender_name=${lender_name}`
						)
						.then((res) => {
							const book = res.data;
							if (book.id === 0) {
								alert("Book does not exist");
								return;
							}
							const request = {
								borrower_id: user.id,
								book_id: book.id,
								lender_id: book.lender_id,
								status: "pending",
							};

							if (book.lender_id === user.id) {
								alert("You cannot request your own book!");
								return;
							}
							axios
								.post("http://localhost:8080/requests", request)
								.then((res) => {
									if (res.data === "Request Created") {
										alert("Request Created!");
										navigate("/userslanding", { replace: true });
										return;
									} else if (res.data === "Book not available") {
										alert("Book is not available at the moment!");
										return;
									} else if (res.data === "Duplicate Request") {
										alert("You have already requested this book!");
										return;
									} else {
										alert("Book does not exist!");
										return;
									}
								})
								.catch((e) => {
									alert(e.message);
									return;
								});
						});
				} else {
					alert(
						`You owe the portal Rs.${res.data.due_amt}. Please pay off the dues to continue using the portal.`
					);
				}
			});
	};

	return (
		<BookRequestCardStyled>
		<Flippy flipOnHover={true} className="card">
			<FrontSide>
				<div className="mainbox">
					<div className="topbox">
						<div className="name">{name}</div>
					</div>
					<div className="bottombox">
						<div className="lender_name">
								<div><i class="fa fa-address-card-o icon" aria-hidden="true"></i></div>
								<div className="heading">Lender Name:</div>
								<div>{lender_name}</div> 
						</div>
					</div>
				</div>
			</FrontSide>	
			<BackSide>
					<div className="container-login100-form-btn back-side">
						<button
							className="login100-form-btn"
							onClick={onSubmit}
						>
							<b>Request this Book</b>
						</button>
					</div>
			</BackSide>
		</Flippy>
		</BookRequestCardStyled>
	);
};

 const mapStateToProps = (state) => ({ user: state.users });

 export default connect(mapStateToProps)(BookRequestCard);