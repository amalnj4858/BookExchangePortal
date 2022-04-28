import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "../Components/Card";

const Userspagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const Userspage = ({ user }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("signin", { replace: true });
      return;
    }
    if (user.name.toLowerCase() != "admin") {
      alert("Only admin is allowed access to this page!");
      navigate("signin", { replace: true });
      return;
    }
    axios.get("http://localhost:8080/users/getallusers").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <Userspagestyled>
      {users.length > 0 ? <Card data={users} /> : <h2>NO USERS</h2>}
    </Userspagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Userspage);
