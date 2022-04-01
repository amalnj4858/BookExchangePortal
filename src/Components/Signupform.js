import axios from "axios";
import React, { useEffect, useState } from "react";
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
  useEffect(() => {});
  const onSubmit = (e) => {
    e.preventDefault();
    //axios
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    if (!name || !phone || !email || !address) {
      alert("Please fill all the details");
      return;
    }
    const user = {
      name: name,
      phone: phone,
      email: email,
      address: address,
      due: 0,
    };
    axios
      .post(`http://localhost:8080/users`, user)
      .then((res) => {
        alert("success");
      })
      .catch((e) => {
        alert(e.message);
        console.log(e);
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
      <input type="submit" className="btn" onClick={onSubmit} />
    </SignupformStyled>
  );
};

export default Signupform;
