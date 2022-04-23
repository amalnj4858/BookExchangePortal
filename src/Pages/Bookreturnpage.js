import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Bookreturncard from "../Components/Bookreturncard";

const Bookreturnpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bookreturnpage = ({ user }) => {
  const [booksLent, setBooksLent] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/transactions/getTransactionbyid?id=${user.id}`
      )
      .then((res) => setBooksLent(res.data))
      .catch((e) => alert(e.message));
  }, []);

  return (
    <Bookreturnpagestyled>
      {booksLent.length > 0
        ? booksLent.map((book) => <Bookreturncard book={book} />)
        : "No Books Borrowed"}
    </Bookreturnpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookreturnpage);
