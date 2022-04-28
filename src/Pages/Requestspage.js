import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "../Components/Card";

const RequestsPagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-direction:column;
`;

const RequestsPage = ({ user }) => {
  const [requests, setRequests] = useState([]);
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
    axios.get("http://localhost:8080/requests/getAllRequests").then((res) => {
      setRequests(res.data);
    });
  }, []);

  console.log(requests);

  return (
    <RequestsPagestyled>
      <h1>REQUESTS</h1>
      {requests.length > 0 ? <Card data={requests} /> : <h2>NO REQUESTS</h2>}
    </RequestsPagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(RequestsPage);
