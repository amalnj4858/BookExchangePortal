import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Extensioncard from "../Components/Extensioncard";

const Applyforextensionstyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  margin-top: 3em;
  margin-bottom: 3em;
`;

const Applyforextensionpage = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
      return;
    }
    axios
      .get(
        `https://bookportalapi.herokuapp.com/transactions/getTransactionbyid?id=${user.id}`
      )
      .then((res) => {
        setTransactions(
          res.data.filter(
            (transaction) => transaction.book_status.toLowerCase() === "lent"
          )
        );
      });
  }, []);

  return (
    <Applyforextensionstyled>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Extensioncard transaction={transaction} />
        ))
      ) : (
        <h2>NO BOOKS BORROWED</h2>
      )}
    </Applyforextensionstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Applyforextensionpage);
