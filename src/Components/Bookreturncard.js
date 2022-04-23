import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

const Returnbookcardstyled = styled.div`
  height: 30rem;
  width: 20rem;
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  btn {
    margin-top: 2em;
    cursor: pointer;
  }
`;

const Returnbookcard = ({ book, user }) => {
  const [bookLent, setBookLent] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/getbookbyid?bookid=${book.book_id}`)
      .then((res) => setBookLent(res.data));
  }, []);

  const onSubmit = () => {
    if (!user) {
      alert("Please login to continue");
      return;
    }
    axios
      .post(`http://localhost:8080/books`, book)
      .then((res) => {
        if (res.data == "Success") {
          alert("success");
          return;
        } else alert("You have already lent this book to the pool.");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <Returnbookcardstyled>
      {bookLent ? (
        <>
          <span>
            <div>Book name:</div>
            <div>{bookLent.name}</div>
          </span>
          <span>
            <div>Author name:</div>
            <div>{bookLent.author}</div>
          </span>
          <span>
            <div>Borrowed from:</div>
            <div>{bookLent.lender_name}</div>
          </span>
          <span>
            <div>Return by:</div>
            <div>{book.expected_return_date}</div>
          </span>
          <button>Return</button>
        </>
      ) : null}
    </Returnbookcardstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Returnbookcard);
