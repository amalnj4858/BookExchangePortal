import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Extensioncardstyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Extensioncard = ({ transaction }) => {
  const [bookname, setBookname] = useState();
  const [lender, setLender] = useState();
  const [expectedReturn, setExpectedReturn] = useState();

  console.log(transaction);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/books/getbookbyid?bookid=${transaction.book_id}`
      )
      .then((res) => {
        setBookname(res.data.name);
        setLender(res.data.lender_name);
        setExpectedReturn(transaction.expected_return_date);
      })
      .catch((e) => alert(e.message));
  }, []);

  const onRequest = () => {
    const returndate = new Date(transaction.expected_return_date);
    const extensionRequest = {
      user_id: transaction.borrower_id,
      book_id: transaction.book_id,
      transaction_id: transaction.id,
      extendedDate: new Date(returndate.getTime() + 15 * 24 * 60 * 60 * 1000),
    };
    axios
      .post("http://localhost:8080/extensionRequests", extensionRequest)
      .then((res) => {
        alert(res.data);
      });
  };

  return (
    <Extensioncardstyled>
      <div>Name: {bookname}</div>
      <div>Lender: {lender}</div>
      <div>Expected Return Date: {expectedReturn}</div>
      <button onClick={onRequest}>Request Extension</button>
    </Extensioncardstyled>
  );
};

export default Extensioncard;
