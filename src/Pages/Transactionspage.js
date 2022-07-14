import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "../Components/Card";

const TransactionsPagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
`;

const TransactionsPage = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
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
        setTransactions(res.data);
      });
  }, []);

  return (
    <TransactionsPagestyled>
      <h1>TRANSACTIONS</h1>
      {transactions.length > 0 ? (
        <Card data={transactions} />
      ) : (
        <h2>NO TRANSACTIONS</h2>
      )}
    </TransactionsPagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(TransactionsPage);
