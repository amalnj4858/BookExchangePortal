import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const Passwordchangestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 15em;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  border: 2px solid white;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;

const Passwordchange = ({ user }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const changePassword = () => {
    if (!oldPassword || !newPassword) {
      alert("Please fill all details");
      return;
    }
    if (oldPassword !== user.password) {
      alert("Wrong password entered!");
      return;
    }
    if (newPassword.length < 8) {
      alert("The password should have atleast 8 characters.");
      return;
    }

    axios
      .get(
        `https://bookportalapi.herokuapp.com/users/updatepassword?id=${user.id}&password=${newPassword}`
      )
      .then(() => {
        alert("New password updated!");
        navigate("/userslanding/profile", { replace: true });
      });
  };

  return (
    <Passwordchangestyled>
      <label>Enter your current password:</label>
      <input
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <label>Enter your new password:</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={changePassword}>Change</button>
    </Passwordchangestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Passwordchange);
