import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import Extensioncard from "../Components/Extensioncard";

const Applyforextensionstyled = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3em;
  margin-top: 3em;
  margin-bottom: 3em;
  & h1 {
    margin-top: 250px;
  }
  & .spinner {
    margin-top: 250px;
  }
`;

const Applyforextensionpage = ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setTransactions(
          res.data.filter(
            (transaction) => transaction.book_status.toLowerCase() === "lent"
          )
        );
      });
  }, []);

  return (
    <Applyforextensionstyled>
      {loading ? (
        <ClipLoader
          color={`#ffffff`}
          loading={loading}
          size={150}
          className="spinner"
        />
      ) : transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Extensioncard transaction={transaction} />
        ))
      ) : (
        <h1>NO BOOKS BORROWED</h1>
      )}
    </Applyforextensionstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Applyforextensionpage);
