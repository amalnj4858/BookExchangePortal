import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Requestcardstyled = styled.div`
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  padding: 5rem;
  & button {
    cursor: pointer;
  }
`;

const Requestcard = ({ request }) => {
  const [bookname, setBookname] = useState(null);
  const [borrower, setBorrower] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/getbookbyid?bookid=${request.book_id}`)
      .then((res) => setBookname(res.data.name));
    axios
      .get(`http://localhost:8080/users/findbyid?id=${request.borrower_id}`)
      .then((res) => setBorrower(res.data.name));
  }, []);

  const currentDate = new Date();

  const onAccept = (e) => {
    e.preventDefault();
    const transaction = {
      request_id: request.request_id,
      book_id: request.book_id,
      borrower_id: request.borrower_id,
      lender_id: request.lender_id,
      issue_date: new Date(),
      expected_return_date: new Date(
        currentDate.setMonth(currentDate.getMonth() + 1)
      ),
      book_status: "Lent",
    };
    axios
      .post("http://localhost:8080/transactions", transaction)
      .then((res) => alert(res.data));
  };

  return (
    <Requestcardstyled>
      <p>Bookname : {bookname}</p>
      <p>Requested By: {borrower}</p>
      {request.status === "pending" ? (
        <button onClick={onAccept}>Accept</button>
      ) : (
        <p>Accepted</p>
      )}
    </Requestcardstyled>
  );
};

export default Requestcard;
