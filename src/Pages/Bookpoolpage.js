import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Bookpool from "../Components/Bookspool";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const Bookpoolpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    margin-top: 300px;
  }

  & .spinner {
    margin-top: 300px;
  }
`;

const Bookpoolpage = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
      return;
    }
    axios.get("https://bookportalapi.herokuapp.com/books").then((res) => {
      setLoading(false);
      setBooks(res.data);
    });
  }, []);

  return (
    <Bookpoolpagestyled>
      {loading ? (
        <ClipLoader
          color={`#ffffff`}
          loading={loading}
          size={150}
          className="spinner"
        />
      ) : books.length > 0 ? (
        <Bookpool data={books} />
      ) : (
        <h1>NO BOOKS</h1>
      )}
    </Bookpoolpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookpoolpage);
