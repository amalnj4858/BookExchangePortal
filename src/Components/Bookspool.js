import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Bookpoolstyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & td {
    border: gray 1px solid;
  }
`;

const Bookpool = ({ data }) => {
  return (
    <Bookpoolstyled>
      <table>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Lender Name</th>
          <th>Lender Address</th>
        </tr>
        {data.map((row) => {
          return (
            <tr>
              <td>{row.name}</td>
              <td>{row.author}</td>
              <td>{row.publisher}</td>
              <td>{row.lender_name}</td>
              <td>{row.lender_address}</td>
            </tr>
          );
        })}
      </table>
    </Bookpoolstyled>
  );
};

export default Bookpool;
