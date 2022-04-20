import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Requestcard from "../Components/Requestscard";

const Requestsrecievedpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Requestsrecievedpage = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {}, []);
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

export default Requestsrecievedpage;
