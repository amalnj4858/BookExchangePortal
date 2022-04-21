import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Requestcardstyled = styled.div`
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  padding: 5rem;
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
  return (
    <Requestcardstyled>
      <p>Bookname : {bookname}</p>
      <p>Requested By: {borrower}</p>
      <button>Accept</button>
    </Requestcardstyled>
  );
};

export default Requestcard;
