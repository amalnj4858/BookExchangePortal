import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

const Lendabookformstyled = styled.div`
  // height: 30rem;
  // width: 20rem;
  // border: black 1px solid;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;

  & .btn {
    margin-top: 2em;
    cursor: pointer;
  }
  & .main {
    display: flex;
    margin-top: 3em;
    flex-direction: column;
    height: 30em;
    width: 20em;
    justify-content: center;
    align-items: center;
    border: solid black 3px;
    background-color: #304555;
    box-shadow: 10px 10px 5px #e2cfea;
  }
  & .headingbox {
    background-color: #da0037;
    width: 20em;
    height: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2em;
  }
  & .heading {
    color: white;
    font-family: "Square Peg", cursive;
    font-size: 3em;
    margin-top: 0.2em;
  }
  & .wrap-input100 {
    margin-top: 2em;
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .input100 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #666666;
    display: block;
    width: 50%;
    align-self: center;
    background: #e6e6e6;
    height: 50px;
    border-radius: 25px;
    padding: 0 4em 0 4em;
  }

  & .focus-input100 {
    display: block;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: #1a0739;
  }

  & .input100:focus + .focus-input100 {
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  & .symbol-input100 {
    font-size: 15px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 25px;
    bottom: 0;
    left: 10px;
    width: 100%;
    height: 100%;
    padding-left: 35px;
    pointer-events: none;
    color: #666666;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 70px 25px;
      opacity: 0;
    }
  }

  & .input100:focus + .focus-input100 + .symbol-input100 {
    color: #da0037;
    padding-left: 28px;
  }
  & .container-login100-form-btn {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
    margin-top: 1em;
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
    background: #daa520;
    color: #081e31;
  }
`;

const Lendabookform = ({ user }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [loading, setLoading] = useState(false);

  const book = {
    name: name,
    author: author,
    publisher: publisher,
    lender_name: user.name,
    lender_address: user.address,
    book_status: "Available",
    lender_id: user.id,
  };

  const onSubmit = () => {
    if (!user) {
      alert("Please login to continue");
      return;
    }
    if (!name || !author || !publisher) {
      alert("Please enter all the details.");
      return;
    }
    setLoading(true);
    axios
      .post(`https://bookportalapi.herokuapp.com/books`, book)
      .then((res) => {
        setLoading(false);
        if (res.data == "Success") {
          alert("success");
          return;
        } else alert("You have already lent this book to the pool.");
      })
      .catch((e) => {
        setLoading(false);
        alert(e.message);
      });
  };

  return (
    <Lendabookformstyled>
      <div className="main">
        <div className="headingbox">
          <div className="heading">Lend a Book</div>
        </div>
        <div className="wrap-input100 name">
          <input
            className="input100"
            type="text"
            placeholder="  Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
        </div>
        <div className="wrap-input100 author ">
          <input
            className="input100"
            type="text"
            placeholder="  Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i class="fa fa-users" aria-hidden="true"></i>
          </span>
        </div>
        <div className="wrap-input100 publisher">
          <input
            className="input100"
            type="text"
            placeholder="  Publisher"
            onChange={(e) => setPublisher(e.target.value)}
            value={publisher}
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i class="fa fa-building" aria-hidden="true"></i>
          </span>
        </div>
        <div className="container-login100-form-btn">
          <button
            className="login100-form-btn"
            onClick={onSubmit}
            disabled={loading}
          >
            <b>Submit</b>
          </button>
        </div>
      </div>
    </Lendabookformstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Lendabookform);
