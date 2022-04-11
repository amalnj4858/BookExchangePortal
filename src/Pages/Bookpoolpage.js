import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bookpool from "../Components/Bookspool";

const Bookpoolpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bookpoolpage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
    });
  }, []);
  console.log(books);

  return (
    <Bookpoolpagestyled>
      {books.length > 0 ? <Bookpool data={books} /> : <h2>NO BOOKS</h2>}
    </Bookpoolpagestyled>
  );
};

export default Bookpoolpage;
