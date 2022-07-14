import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Extensioncardstyled = styled.div`
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

const Extensioncard = ({ transaction }) => {
  const [bookname, setBookname] = useState();
  const [lender, setLender] = useState();
  const [expectedReturn, setExpectedReturn] = useState();

  console.log(transaction);

  useEffect(() => {
    axios
      .get(
        `https://bookportalapi.herokuapp.com/books/getbookbyid?bookid=${transaction.book_id}`
      )
      .then((res) => {
        setBookname(res.data.name);
        setLender(res.data.lender_name);
        setExpectedReturn(transaction.expected_return_date);
      })
      .catch((e) => alert(e.message));
  }, []);

  const onRequest = () => {
    const returndate = new Date(transaction.expected_return_date);
    const extensionRequest = {
      user_id: transaction.borrower_id,
      book_id: transaction.book_id,
      transaction_id: transaction.id,
      extendedDate: new Date(returndate.getTime() + 15 * 24 * 60 * 60 * 1000),
    };
    axios
      .post(
        "https://bookportalapi.herokuapp.com/extensionRequests",
        extensionRequest
      )
      .then((res) => {
        alert(res.data);
      });
  };

  return (
    <Extensioncardstyled>
      <div className="mainbox">
        <div className="topbox">
          <div className="name">{bookname}</div>
        </div>
        <div className="bottombox">
          <div className="desc">
            <div className="left">
              <div className="author icon-desc">
                <span className="icon">
                  <i class="fa fa-user icon" aria-hidden="true"></i>{" "}
                </span>
                <span className="heading">Lender:</span> {lender}
              </div>
            </div>
            <div className="right">
              <div className="publisher icon-desc">
                <i class="fa fa-building icon" aria-hidden="true"></i>{" "}
                <span className="heading">Expected Return Date:</span>{" "}
                {expectedReturn}{" "}
              </div>
            </div>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn" onClick={onRequest}>
              <b className="link_btn">Request Extension</b>
            </button>
          </div>
        </div>
      </div>
    </Extensioncardstyled>
  );
};

export default Extensioncard;
