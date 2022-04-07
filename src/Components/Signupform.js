import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const SignupformStyled = styled.div`
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

const Signupform = () => {
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

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
        alert("success");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <SignupformStyled>
      <h2>SIGN UP</h2>
      <div className="details">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="details">
        <label>Phone</label>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>
      <div className="details">
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="details">
        <label>Address</label>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div className="details">
        <label>Set Password</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="details">
        <label>Confirm Password</label>
        <input
          type="text"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </div>
      <input type="submit" className="btn" onClick={onSubmit} />
    </SignupformStyled>
  );
};

export default Signupform;
