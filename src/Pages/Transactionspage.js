import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "../Components/Card";
import { ClipLoader } from "react-spinners";

const TransactionsPagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
  & .spinner {
    margin-top: 275px;
  }
  & h1 {
    margin-top: 275px;
  }
`;

const TransactionsPage = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
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
      .get(
        "https://bookportalapi.herokuapp.com/transactions/getalltransactions"
      )
      .then((res) => {
        setLoading(false);
        setTransactions(res.data);
      });
  }, []);

  return (
    <TransactionsPagestyled>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          size={150}
          loading={loading}
          className="spinner"
        />
      ) : transactions.length > 0 ? (
        <Card data={transactions} />
      ) : (
        <h1>NO TRANSACTIONS</h1>
      )}
    </TransactionsPagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(TransactionsPage);
