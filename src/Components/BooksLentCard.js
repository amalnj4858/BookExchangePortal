import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const BooksLentCardstyled = styled.div`
& {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

& .mainbox {
	width:fit-content;
	border: 2px solid black;
	display: flex;
	flex-direction: column;
	box-shadow: 10px 10px 5px #E2CFEA;
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
   flex-direction:column;
   gap:2em;
}
& .left{
   display:flex;
   flex-direction:column;
   text-align:left;
   gap:1.5em;
}
& .right{  
   display:flex;
   flex-direction:column;
   justify-self:right;
   gap:1.5em;
	max-width:30em;
}
& .lender_adress{
	display:flex;
	flex-wrap:wrap;
}
& .desc {
	margin-top: 2em;
	font-size: 1rem;
	font-family: Roboto;
	font-weight: 500;
	display: flex;
	margin-right: 2em;
	text-align: center;
   display:flex;
	flex-wrap: wrap;
	font-family: 'Lato', sans-serif;	
   gap:5em;
}
& .icon-desc{
   display:flex;
   flex-wrap:wrap;
   gap:0.3em;
}
& .icon{
	margin-right:-2em;
}
& .name {
	font-size: 1.7rem;
	margin-bottom:-0.1em;
}
& .heading{
   font-weight:800;
   text-decoration:underline;
}

& .book_status{
   margin-bottom:0em;
   align-self:center;
   display:flex;
   flex-wrap:wrap;
	font-size:1.5em;
   gap:0.5em;
}
& .available{
   margin-top:-0.2em;
}
& .container-login100-form-btn {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 20px;
	margin-top:-1em;
	margin-bottom:1em;
   }
 
   & .login100-form-btn {
	font-family: "Montserrat", sans-serif;
	font-size: 15px;
	line-height: 1.5;
	color: white;
	width: 100%;
	height: 42px;
	border-radius: 25px;
	background: #081e31;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 25px;
	transition: all 0.4s;
   }
 
   & .login100-form-btn:hover {
	background: #DAA520;
	color:#081e31;
   
   }
   & .lent{
	   margin-bottom:1em;
	   font-size:1.3em;
	   color:#da0037;
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

const BooksLentCard = ({ book }) => {
	const [borrower, setBorrower] = useState(null);
	const navigate = useNavigate();

	const withdrawbook = () => {
		axios
			.get(`http://localhost:8080/books/withdrawbook?bookid=${book.id}`)
			.then((res) => {
				alert(res.data);
				navigate("userslanding", { replace: true });
			});
	};

	useEffect(() => {
		if (book.book_status.toLowerCase() === "unavailable")
			axios
				.get(`http://localhost:8080/transactions/getBorrower?bookid=${book.id}`)
				.then((res) => setBorrower(res.data));
	}, []);

	return (
		<BooksLentCardstyled>
			<div className="mainbox">
              <div className="topbox">
                <div className="name">{book.name}</div>
              </div>
              <div className="bottombox">
                <div className="desc">
                    <div className="left">
                        <div className="author icon-desc">
					    <span className="icon">< i class="fa fa-user icon" aria-hidden="true"></i> </span>
					    <span className="heading">Author:</span> {book.author}</div>

                    </div>
                    <div className="right">
				<div className="publisher icon-desc"><i class="fa fa-building icon" aria-hidden="true"></i> <span className="heading">Publisher:</span>  {book.publisher} </div>
                    </div>
                    </div>
				{book.book_status.toLowerCase() === "available" ? (
				<div className="container-login100-form-btn">
				<button className="login100-form-btn" onClick={withdrawbook}>
					  <b className="link_btn">Withdraw Book</b>
				</button>
		   </div>
			) : (
				<div className="lent">Lent to {borrower}</div>
			)}
              </div>
            </div>
		</BooksLentCardstyled>
	);
};

export default BooksLentCard;
