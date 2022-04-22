import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import axios from "axios";

const Lendabookformstyled = styled.div`
  height: 30rem;
  width: 20rem;
  border: black 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .details {
    display: flex;
    gap: 1em;
  }
  & .details * {
    margin: 0.5em;
  }
  & .btn {
    margin-top: 2em;
    cursor: pointer;
  }
`;

const Lendabookform = ({ user }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");

  const book = {
    name: name,
    author: author,
    publisher: publisher,
    lender_name: user.name,
    lender_address: user.address,
    book_status: "available",
    lender_id: user.id,
  };

  const onSubmit = () => {
    if (!user) {
      alert("Please login to continue");
      return;
    }
    axios
      .post(`http://localhost:8080/books`, book)
      .then((res) => {
        if (res.data == "Success") {
          alert("success");
          return;
        } else alert("You have already lent this book to the pool.");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <Lendabookformstyled>
      <h2>LEND A BOOK</h2>
      <div className="details">
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="details">
        <label>Author</label>
        <input
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className="details">
        <label>Publisher</label>
        <input
          type="text"
          onChange={(e) => setPublisher(e.target.value)}
          value={publisher}
        />
      </div>
      <input type="submit" className="btn" onClick={onSubmit} />
    </Lendabookformstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Lendabookform);
