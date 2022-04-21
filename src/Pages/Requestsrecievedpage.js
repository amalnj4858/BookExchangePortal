import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Requestcard from "../Components/Requestscard";
import { connect } from "react-redux";

const Requestsrecievedpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Requestsrecievedpage = ({ user }) => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/requests?id=${user.id}`)
      .then((res) => setRequests(res.data))
      .catch((err) => alert(err));
  }, []);
  console.log(requests);
  return (
    <Requestsrecievedpagestyled>
      <h2>REQUESTS RECIEVED</h2>
      {requests.length > 0 ? (
        requests.map((request) => <Requestcard request={request} />)
      ) : (
        <h3>NO REQUEST RECIEVED</h3>
      )}
    </Requestsrecievedpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Requestsrecievedpage);
