import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "./BookCard";

const Bookpoolstyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .main {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    gap: 4em;
    margin-bottom: 5vh;
  }
`;

const Bookpool = ({ data }) => {
  return (
    <Bookpoolstyled>
      <div className="main">
        {data.map((row) => {
          return (
            <BookCard
              name={row.name}
              author={row.author}
              publisher={row.publisher}
              lender_name={row.lender_name}
              lender_address={row.lender_address}
              book_status={row.book_status}
            />
          );
        })}
      </div>
    </Bookpoolstyled>
  );
};

export default Bookpool;
