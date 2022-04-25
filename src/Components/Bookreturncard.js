import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

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
    const currdate = new Date();
    const expectedReturnDate = new Date(book.expected_return_date);
    let dayslapsed =
      (currdate.getTime() - expectedReturnDate.getTime()) / (1000 * 3600 * 24);
    if (dayslapsed < 0) dayslapsed = 0;
    axios
      .post(
        `http://localhost:8080/books/returnbook?bookid=${
          book.book_id
        }&returndate=${currdate.getFullYear()}-${
          currdate.getMonth() + 1 < 10
            ? `0${currdate.getMonth() + 1}`
            : `${currdate.getMonth() + 1}`
        }-${currdate.getDate()}&numberofdayslate=${dayslapsed}&userid=${
          user.id
        }&transactionid=${book.id}`,
        null
      )
      .then((res) => {
        alert(res.data);
        navigate("/userslanding", { replace: true });
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
          <button onClick={onSubmit}>Return</button>
        </>
      ) : null}
    </Returnbookcardstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Returnbookcard);
