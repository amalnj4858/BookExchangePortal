import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "../Components/Card";
import { ClipLoader } from "react-spinners";

const Userspagestyled = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  margin-top: -5em;
  margin-bottom: 2em;
  & .inner {
    margin-top: 300px;
  }
`;

const Userspage = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
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
    axios
      .get("https://bookportalapi.herokuapp.com/users/getallusers")
      .then((res) => {
        setLoading(false);
        setUsers(res.data);
      });
  }, []);

  return (
    <Userspagestyled>
      <h1>USERS</h1>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          size={150}
          loading={loading}
          className="spinner"
        />
      ) : users.length > 0 ? (
        <Card data={users} />
      ) : (
        <h2>NO USERS</h2>
      )}
    </Userspagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Userspage);
