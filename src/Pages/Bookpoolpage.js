import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Bookpool from "../Components/Bookspool";
import { connect } from "react-redux";

const Bookpoolpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bookpoolpage = ({ user }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
      return;
    }
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <Bookpoolpagestyled>
      {books.length > 0 ? <Bookpool data={books} /> : <h2>NO BOOKS</h2>}
    </Bookpoolpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookpoolpage);
