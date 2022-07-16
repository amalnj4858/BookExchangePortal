import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import BooksLentCard from "../Components/BooksLentCard";

const CurrentLendingspagestyled = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin: 1em;
  margin-top: 3em;
  & .spinner {
    margin-top: 275px;
  }
  & h1 {
    margin-top: 270px;
  }
`;

const CurrentLendingspage = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
      return;
    }
    axios
      .get(
        `https://bookportalapi.herokuapp.com/books/getbookbylenderid?lenderid=${user.id}`
      )
      .then((res) => {
        setLoading(false);
        setBooks(res.data);
      });
  }, []);

  return (
    <CurrentLendingspagestyled>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          size={150}
          loading={loading}
          className="spinner"
        />
      ) : books.length > 0 ? (
        books.map((book) => <BooksLentCard book={book} />)
      ) : (
        <h1>NO BOOKS LENT</h1>
      )}
    </CurrentLendingspagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(CurrentLendingspage);
