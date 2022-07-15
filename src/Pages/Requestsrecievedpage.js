import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Requestcard from "../Components/Requestscard";
import { connect } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

const Requestsrecievedpagestyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & .requests {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
  }
  & .heading1 {
    color: white;
    font-family: "Square Peg", cursive;
    font-size: 3em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  & .spinner {
    margin-top: 300px;
  }
`;

const Requestsrecievedpage = ({ user }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
      return;
    }
    axios
      .get(`https://bookportalapi.herokuapp.com/requests?id=${user.id}`)
      .then((res) => {
        setLoading(false);
        setRequests(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <Requestsrecievedpagestyled>
      <div className="heading1">REQUESTS RECIEVED</div>
      <div className="requests">
        {loading ? (
          <ClipLoader
            color="#ffffff"
            size={150}
            loading={loading}
            className="spinner"
          />
        ) : requests.length > 0 ? (
          requests.map((request) => <Requestcard request={request} />)
        ) : (
          <h3>NO REQUEST RECIEVED</h3>
        )}
      </div>
    </Requestsrecievedpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Requestsrecievedpage);
