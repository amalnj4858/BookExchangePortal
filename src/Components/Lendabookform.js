import React, { useState } from "react";
import styled from "styled-components";

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

const Lendabookform = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
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
      <input type="submit" className="btn" />
    </Lendabookformstyled>
  );
};

export default Lendabookform;
