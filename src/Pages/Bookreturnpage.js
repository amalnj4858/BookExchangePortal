import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Bookreturncard from "../Components/Bookreturncard";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";

const Bookreturnpagestyled = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
  gap: 2em;

  & .spinner {
    margin-top: 300px;
  }
`;
const Bookreturnpage = ({ user }) => {
  const [booksLent, setBooksLent] = useState([]);
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
        setBooksLent(
          res.data.filter(
            (transaction) => transaction.book_status.toLowerCase() === "lent"
          )
        );
      })
      .catch((e) => alert(e.message));
  }, []);

  return (
    <Bookreturnpagestyled>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          size={150}
          loading={loading}
          className="spinner"
        />
      ) : booksLent.length > 0 ? (
        booksLent.map((book) => <Bookreturncard book={book} />)
      ) : (
        "No Books Borrowed"
      )}
    </Bookreturnpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookreturnpage);
