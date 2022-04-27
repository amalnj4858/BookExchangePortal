import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Profilepagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
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
      <h1>YOUR PROFILE</h1>
      <div>Name : {user.name}</div>
      <div>Email : {user.email}</div>
      <div>Address : {user.address}</div>
      <div>Phone: {user.phone}</div>
      <Link to="/userslanding/passwordchange">Change password?</Link>
    </Profilepagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Profilepage);
