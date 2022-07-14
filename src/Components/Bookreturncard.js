import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const Returnbookcardstyled = styled.div`
& {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

& .mainbox {
	width:fit-content;
	border-radius:2em;
	border: 2px solid black;
	display: flex;
	flex-direction: column;
	background-color:black;
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
	border-radius:2em;
	margin-bottom:0.5em;
}
& .bottombox {
   background-color:#2e4353;
   padding-left:2em;
   padding-right:2em;
   display:flex;
   flex-direction:column;
   gap:2em;
   border-radius:2em;
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
   justify-content:center;
   align-items:center;
   gap:1.5em;
max-width:30em;
}
& .desc {
	margin-top: 1em;
	font-size: 1rem;
	font-family: Roboto;
	font-weight: 500;
	display: flex;
	margin-right: 2em;
	text-align: center;
   display:flex;
	flex-wrap: wrap;
	font-family: 'Lato', sans-serif;	
   gap:3em;
}
& .icon-desc{
   display:flex;
   flex-wrap:wrap;
   gap:0.5em;
}
& .name {
	font-size: 1.7rem;
	margin-bottom:-0.1em;
}
& .heading{
   font-weight:800;
   text-decoration:underline;
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
& .login100-form-btn:hover {
	background: #DAA520;
	color:#081e31;
	cursor:pointer;
}
& .return-btn{
	margin-top:-2em;
	margin-bottom:1em;
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

const Returnbookcard = ({ book, user }) => {
  const [bookLent, setBookLent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://bookportalapi.herokuapp.com/books/getbookbyid?bookid=${book.book_id}`
      )
      .then((res) => setBookLent(res.data));
  }, []);

  const onSubmit = () => {
    if (!user) {
      alert("Please login to continue");
      return;
    }
    const currdate = new Date();
    const expectedReturnDate = new Date(book.expected_return_date);
    let dayslapsed =
      (currdate.getTime() - expectedReturnDate.getTime()) / (1000 * 3600 * 24);
    if (dayslapsed < 0) dayslapsed = 0;
    axios
      .post(
        `https://bookportalapi.herokuapp.com/books/returnbook?bookid=${
          book.book_id
        }&returndate=${currdate.getFullYear()}-${
          currdate.getMonth() + 1 < 10
            ? `0${currdate.getMonth() + 1}`
            : `${currdate.getMonth() + 1}`
        }-${currdate.getDate()}&numberofdayslate=${dayslapsed}&userid=${
          user.id
        }&transactionid=${book.id}`,
        null
      )
      .then((res) => {
        alert(res.data);
        navigate("/userslanding", { replace: true });
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <Returnbookcardstyled>
      {bookLent ? (
        <div className="mainbox">
          <div className="topbox">
            <div className="name">{bookLent.name}</div>
          </div>
          <div className="bottombox">
            <div className="desc">
              <div className="left">
                <div className="author icon-desc">
                  <i class="fa fa-user icon" aria-hidden="true"></i>{" "}
                  <span className="heading">Author:</span> {bookLent.author}
                </div>
                <div className="publisher icon-desc">
                  <i class="fa fa-building icon" aria-hidden="true"></i>{" "}
                  <span className="heading">Publisher:</span>{" "}
                  {bookLent.publisher}{" "}
                </div>
              </div>
              <div className="right">
                <div className="lender_name icon-desc">
                  <i class="fa fa-users icon" aria-hidden="true"></i>{" "}
                  <span className="heading">Lender Name:</span>{" "}
                  {bookLent.lender_name}{" "}
                </div>
                <div className="container-login100-form-btn return-btn">
                  <button className="login100-form-btn" onClick={onSubmit}>
                    <b>Return Book</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Returnbookcardstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Returnbookcard);
