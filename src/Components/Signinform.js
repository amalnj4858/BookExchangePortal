import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/userActions";
import { connect } from "react-redux";

const SigninformStyled = styled.div`
  height: 30rem;
  width: 20rem;
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .details {
    display: flex;
    gap: 1em;
  }
  & .details * {
    margin: 0.5em;
  }
  & .btn {
    margin-top: 2em;
    cursor: pointer;
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
    <SigninformStyled>
      <h2>SIGN IN</h2>
      <div className="details">
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="details">
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input type="submit" className="btn" onClick={onSubmit} />
      <Link to="/signup">New User?</Link>
    </SigninformStyled>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Signinform);
