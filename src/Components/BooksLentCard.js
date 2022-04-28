import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const BooksLentCardstyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BooksLentCard = ({ book }) => {
  const [borrower, setBorrower] = useState(null);
  const navigate = useNavigate();

  const withdrawbook = () => {
    axios
      .get(`http://localhost:8080/books/withdrawbook?bookid=${book.id}`)
      .then((res) => {
        alert(res.data);
        navigate("userslanding", { replace: true });
      });
  };

  useEffect(() => {
    if (book.book_status.toLowerCase() === "unavailable")
      axios
        .get(`http://localhost:8080/transactions/getBorrower?bookid=${book.id}`)
        .then((res) => setBorrower(res.data));
  }, []);

  return (
    <BooksLentCardstyled>
      <div>Book name: {book.name}</div>
      <div>Author: {book.author}</div>
      <div>Publisher: {book.publisher}</div>
      {book.book_status.toLowerCase() === "available" ? (
        <button onClick={withdrawbook}>Withdraw book</button>
      ) : (
        <div>Lent to {borrower}</div>
      )}
    </BooksLentCardstyled>
  );
};

export default BooksLentCard;
