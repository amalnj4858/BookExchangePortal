import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userActions";
import { connect } from "react-redux";

const SignInFormStyled = styled.div`
& body{
	background-color: #1a0739;
}

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
	background: #081e31;
	background-image: url("../Assets/bgpattern.svg"); 
}
& .alreadylink{
    text-decoration: none;
    color:white;
  }

& .wrap-login100 {
	width: 95%;
	border: 2px solid black;
	background: #DA0037;
	background-image: url("../Assets/pattern.svg");
	border-radius: 10px;
	overflow: hidden;
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
	margin-bottom:-1em;
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
	width: 70%;
	align-self:center;
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
	left: -10px;
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
& .container-login100 {
	background-color:#1a0739;
	background-image: url("../Assets/bgpattern.svg"); 
}
& .container-login100-form-btn {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 20px;
	
}
& .welcomeback{
	color:white	;
	font-family: 'Ms Madi', cursive;
	font-size:1.7em;
}
& .already{
	color:white;
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
`;

const Signinform = ({ addUser }) => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			alert("Please fill all the details");
			return;
		}

		const user = {
			email: email,
			password: password,
		};

		axios
			.post(`http://localhost:8080/users/signin`, user)
			.then((res) => {
				if (res.data == "Authorised") {
					axios
						.get(`http://localhost:8080/users?email=${user.email}`)
						.then((res) => addUser(res.data));
					alert("welcome");
					navigate("userslanding");
				} else alert(res.data);
			})
			.catch((e) => {
				alert(e.message);
			});
	};	

	return (
		<SignInFormStyled className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form">
					<span className="login100-form-title">
							<div className="welcomeback">
								<b>Welcome Back!</b>
							</div>
					</span>
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
					<div className="container-login100-form-btn">
						<button
							className="login100-form-btn"
							onClick={onSubmit}
						>
							<b>Sign In</b>
						</button>
					</div>
						<div>
							<div className="text-center p-t-35">
								<Link className="txt2 alreadylink"  to="/signup">
									<p className="already">
									Create your Account
									</p>
								</Link>
							</div>
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

export default connect(null, mapDispatchToProps)(Signinform);
