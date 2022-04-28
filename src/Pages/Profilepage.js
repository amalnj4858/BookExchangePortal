import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Profilepagestyled = styled.div`
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1em;
	& .heading{
		color:white	;
		font-family: 'Square Peg', cursive;
		font-size	:5em;
		margin-top:0.2em;
	}
	& .main{
		height:fit-content;
		box-shadow: 10px 10px 5px #E2CFEA;

	}
	& .topbox{
		background-color:#da0037;
		padding:1em;
		font-size:2em;
		
	}
	& .bottombox{
		background-color:#304555;
		padding:2em;
		font-size:1.5em;
	
	}
	& .details{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:left;
		font-size:1em;
		text-align:left;
		gap:1em;
	}
	& .name{
		font-family:roboto;
		text-transform: capitalize;
	}
	& .icon{
		margin-right:0.5em;
	}
	& .desc{
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
	   & .link_btn{
		   text-decoration:none;
	   }
`;

const Profilepage = ({ user }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("userslanding", { replace: true });
			return;
		}
	}, []);

	return (
		<Profilepagestyled>
			{/* {<div className="heading">
				<div> Your Profile</div>
			</div>} */}
			<div className="main">
				<div className="topbox">
					<div className="name">{user.name}</div>
				</div>
				<div className="bottombox">
					<div className="details">
						<div>
							<span className="symbol-input100">
              						<i class="fa fa-envelope fa-1x icon" aria-hidden="true"></i>
            					</span>
							<span className="desc">Email :</span> {user.email}
						</div>
						<div>
							<span className="symbol-input100">
              						<i class="fa fa-address-book icon" aria-hidden="true"></i>
           					 </span>
							<span className="desc">Address :</span> {user.address}
						</div>
						<div>
							<span className="symbol-input100">
               					 <i class="fa fa-phone-square icon" aria-hidden="true"></i>
             					 </span>
							<span className="desc">Phone:</span> {user.phone}
						</div>
					</div>
					<Link to="/userslanding/passwordchange">
						<div className="container-login100-form-btn">
            					<button className="login100-form-btn">
              						<b className="link_btn">Change Password</b>
           					 </button>
          				</div>
					</Link>
				</div>
			</div>
		</Profilepagestyled>
	);
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Profilepage);
