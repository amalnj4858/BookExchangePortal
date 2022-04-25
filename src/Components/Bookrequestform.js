import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Bookrequestformstyled = styled.div`
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

const Bookrequestform = ({ user }) => {
  const [books, setBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedLender, setSelectedLender] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setBooks(res.data);
      setSelectedBook(res.data[0].name);
      setSelectedLender(res.data[0].lender_name);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (user === null) {
      alert("Please login to continue");
      return;
    }
    if (selectedBook === null || selectedLender === null) {
      alert("Please select a lender and book to continue!");
      return;
    }
    axios
      .get(`http://localhost:8080/users/findbyid?id=${user.id}`)
      .then((res) => {
        if (res.data.due_amt === 0) {
          axios
            .get(
              `http://localhost:8080/books/getbook?name=${selectedBook}&lender_name=${selectedLender}`
            )
            .then((res) => {
              const book = res.data;
              if (book.id === 0) {
                alert("Book does not exist");
                return;
              }
              const request = {
                borrower_id: user.id,
                book_id: book.id,
                lender_id: book.lender_id,
                status: "pending",
              };

              if (book.lender_id === user.id) {
                alert("You cannot request your own book!");
                return;
              }
              axios
                .post("http://localhost:8080/requests", request)
                .then((res) => {
                  if (res.data === "Request Created") {
                    alert("Request Created!");
                    navigate("/userslanding", { replace: true });
                    return;
                  } else if (res.data === "Book not available") {
                    alert("Book is not available at the moment!");
                    return;
                  } else if (res.data === "Duplicate Request") {
                    alert("You have already requested this book!");
                    return;
                  } else {
                    alert("Book does not exist!");
                    return;
                  }
                })
                .catch((e) => {
                  alert(e.message);
                  return;
                });
            });
        } else {
          alert(
            `You owe the portal Rs.${res.data.due_amt}. Please pay off the dues to continue using the portal.`
          );
        }
      });
  };
  return (
    <Bookrequestformstyled>
      <div className="details">
        <label>Book Name</label>
        <select
          name="cars"
          id="cars"
          form="carform"
          onChange={(e) => setSelectedBook(e.target.value)}
          value={selectedBook}
        >
          {books
            ? books.map((book) => (
                <option value={`${book.name}`}>{book.name}</option>
              ))
            : "No books"}
        </select>
      </div>
      <div className="details">
        <label>Lender Name</label>
        <select
          name="cars"
          id="cars"
          form="carform"
          onChange={(e) => setSelectedLender(e.target.value)}
          value={selectedLender}
        >
          {books
            ? books.map((book) => (
                <option value={`${book.lender_name}`}>
                  {book.lender_name}
                </option>
              ))
            : "No lenders"}
        </select>
      </div>
      <input type="submit" className="btn" onClick={onSubmit} />
    </Bookrequestformstyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookrequestform);
