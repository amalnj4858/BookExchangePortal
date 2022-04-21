import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../redux/userActions";

const SignInFormStyled = styled.div`
  & a {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
  }

  & a:focus {
    outline: none !important;
  }

  & a:hover {
    text-decoration: none;
    color: #57b846;
  }

  & p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  & input {
    outline: none;
    border: none;
    z-index:-1;
  }

  & input::-webkit-input-placeholder {
    color: #999999;
  }
  & input:-moz-placeholder {
    color: #999999;
  }
  & input::-moz-placeholder {
    color: #999999;
  }
  & input:-ms-input-placeholder {
    color: #999999;
  }

  & button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  & button:hover {
    cursor: pointer;
  }

  & iframe {
    border: none !important;
  }

  & .txt1 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: #999999;
  }

  & .txt2 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: #666666;
  }

  & {
    width: 30%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: #1a0739;
  }

  & .wrap-login100 {
    width: 95%;
    border: 2px solid black;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    background:#9555ff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2em 2em 2em 2em;
    box-shadow: 10px 10px 5px #E2CFEA;
  }

  & .p-t-12 {
    padding-top: 1em;
  }
  & .p-t-35 {
    padding-top: 35px;
  }

  & .login100-form {
    width: 90%;
    
    align-items: center;
  }

  & .text-center {
    text-align: center;
  }

  & .login100-form-title {
    font-family: roboto;
    font-size: 2rem;
    color: black;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 54px;
  }

  & .wrap-input100 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 10px;
  }

  & .input100 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #666666;
    display: block;
    width: 80%;
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
    left: 0;
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
    color: #1a0739;
    padding-left: 28px;
  }

  & .container-login100-form-btn {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;
  }

  & .login100-form-btn {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    line-height: 1.5;
    color: black;
    width: 100%;
    height: 42px;
    border-radius: 25px;
    background: #b5f7e7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    transition: all 0.4s;
  }

  & .login100-form-btn:hover {
	background: #1a0739;
	color:#f5c87e;
}
  }

  & .orline {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }

  & .orline span {
    background: #fff;
    padding: 0 10px;
  }

  & .google{
    cursor: pointer;
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    pointer-events: all;
    

  }
  & .googlebtn{
    display:flex;
    justify-content:center;
  }
  /*& .google-btn {
    cursor: pointer;
    width: auto;
    margin-top: 0.6em;
    height: 42px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    & .google-icon-wrapper {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 25px;
      background-color: white;
    }
    & .google-icon {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    & .btn-text {
      padding-top: 0.6em;
      text-align: center;
      margin: 11px 11px 0 0;
      color: #4285f4;
      font-size: 14px;
      letter-spacing: 0.2px;
      font-family: "Roboto";
    }

    &:hover {
      box-shadow: 0 0 6px #4285f4;
    }

    &:active {
      background: #1669f2;
    }*/

  }
  @media (max-width: 1290px) {
    & {
      width: 35%;
    }
  }

  @media (max-width: 1290px) {
    & {
      width: 35%;
    }
  }

  @media (max-width: 992px) {
    .login100-pic {
      width: 45%;
    }
    & {
      width: 40%;
    }
  }

  @media (max-width: 768px) {
    .login100-pic {
      display: none;
    }

    & {
      width: 55vw;
    }

    .login100-form {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    & {
      width: 80vw;
    }
  }
  & .welcome{
	  color:#b5f7e7;
	  font-family: 'Ms Madi', cursive;
	  font-size:2em;
  }
  & .already{
	  margin-top:1em;
	  color:#b5f7e7;
  }
`;

const Signupform = ({ history, addUser }) => {
	const [name, setName] = useState(null);
	const [phone, setPhone] = useState(null);
	const [email, setEmail] = useState(null);
	const [address, setAddress] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		if (!name || !phone || !email || !address || !password) {
			alert("Please fill all the details");
			return;
		}
		if (password.length < 8) {
			alert("Your password is too weak. Requires atleast 8 characters.");
			return;
		}
		if (password != confirmPassword) {
			alert("Oops! The passwords don't match!");
			return;
		}

		const user = {
			name: name,
			phone: phone,
			email: email,
			address: address,
			due: 0,
			password: password,
		};

		axios
			.post(`http://localhost:8080/users`, user)
			.then((res) => {
				console.log(user);
				addUser(user);
				alert("success");
				navigate("/userslanding", { replace: true });
			})
			.catch((e) => {
				alert("duplicate phone/email");
				return;
			});
	};
	return (
		<SignInFormStyled className="container-login100">
      <div className="wrap-login100">
        <form className="login100-form">
          <span className="login100-form-title">
              <div style={{ marginBottom: "-1em" }}>
                <b className="welcome">Welcome</b>
              </div>
          </span>
            <div>
              <div className="wrap-input100 ">
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="  Name*"
                  onChange={(e) => setName(e.target.value)}
			   value={name}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 ">
                <input
                  className="input100"
                  type="tel"
                  name="phone_no"
                  placeholder="  Mobile Number*"
                  maxLength="10"
                  onChange={(e) => setPhone(e.target.value)}
			   value={phone}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="email"
              placeholder="  Email*"
              onChange={(e) => setEmail(e.target.value)}
		    value={email}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i class="fa fa-envelope fa-1x" aria-hidden="true"></i>
            </span>
          </div>

          <div className="wrap-input100">
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="  Password*"
              onChange={(e) => setPassword(e.target.value)}
			value={password}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i class="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>
		<div className="wrap-input100">
            <input
              className="input100"
              type="password"
              name="pass"
              placeholder="  Confirm Password*"
              onChange={(e) => setConfirmPassword(e.target.value)}
			value={confirmPassword}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i class="fa fa-key" aria-hidden="true"></i>
            </span>
          </div>
          <div className="container-login100-form-btn">
            <button
              className="login100-form-btn"
              onClick={onSubmit}
            >
              <b>Sign Up</b>
            </button>
          </div>
            <div className="text-center p-t-35-white">
              <Link className="link" to="/">
                <p className="already">Already a user? Sign in</p>
              </Link>
            </div>
        </form>
      </div>
    </SignInFormStyled>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addUser: (user) => dispatch(addUser(user)),
	};
};

export default connect(null, mapDispatchToProps)(Signupform);
