import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router";
import BookRequestCard from "./BookRequestCard.js";

const Bookrequestformstyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
  gap: 2em;
`;

const Bookrequestform = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios.get("https://bookportalapi.herokuapp.com/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <Bookrequestformstyled>
      {books
        ? books.map((book) => (
            <BookRequestCard
              name={book.name}
              lender_name={book.lender_name}
              author={book.author}
              publisher={book.publisher}
            />
          ))
        : "No Books Available"}
    </Bookrequestformstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookrequestform);
