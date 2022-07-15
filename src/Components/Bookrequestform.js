import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router";
import BookRequestCard from "./BookRequestCard.js";
import { ClipLoader } from "react-spinners";

const Bookrequestformstyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  gap: 2em;
  & .spinner {
    margin-top: 300px;
  }
`;

const Bookrequestform = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://bookportalapi.herokuapp.com/books").then((res) => {
      setLoading(false);
      setBooks(res.data);
    });
  }, []);

  return (
    <Bookrequestformstyled>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          size={150}
          loading={loading}
          className="spinner"
        />
      ) : books.length ? (
        books.map((book) => (
          <BookRequestCard
            name={book.name}
            lender_name={book.lender_name}
            author={book.author}
            publisher={book.publisher}
          />
        ))
      ) : (
        <h1>No Books Available</h1>
      )}
    </Bookrequestformstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookrequestform);
