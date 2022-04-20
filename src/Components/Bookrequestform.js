import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Bookrequestformstyled = styled.div`
  height: 30rem;
  width: 20rem;
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .details {
    display: flex;
    gap: 1em;
  }
  & .details * {
    margin: 0.5em;
  }
  & .btn {
    margin-top: 2em;
    cursor: pointer;
  }
`;

const Bookrequestform = ({ user }) => {
  const [books, setBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedLender, setSelectedLender] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
    });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:8080/books/getbook?name=${selectedBook}&lender_name=${selectedLender}`
      )
      .then((res) => {
        const book = res.data;
        if (book.id == 0) {
          alert("Book does not exist");
          return;
        }
        const request = {
          borrower_id: user.id,
          book_id: book.id,
          lender_id: book.lender_id,
          status: "pending",
        };
        axios
          .post("http://localhost:8080/requests", request)
          .then((res) => alert("success"));
      });
  };
  return (
    <Bookrequestformstyled>
      <div className="details">
        <label>Book Name</label>
        <select
          name="cars"
          id="cars"
          form="carform"
          onChange={(e) => setSelectedBook(e.target.value)}
          value={selectedBook}
        >
          {books
            ? books.map((book) => (
                <option value={`${book.name}`}>{book.name}</option>
              ))
            : "No books"}
        </select>
      </div>
      <div className="details">
        <label>Lender Name</label>
        <select
          name="cars"
          id="cars"
          form="carform"
          onChange={(e) => setSelectedLender(e.target.value)}
          value={selectedLender}
        >
          {books
            ? books.map((book) => (
                <option value={`${book.lender_name}`}>
                  {book.lender_name}
                </option>
              ))
            : "No lenders"}
        </select>
      </div>
      <input type="submit" className="btn" onClick={onSubmit} />
    </Bookrequestformstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookrequestform);
