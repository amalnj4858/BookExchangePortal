import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Duespagestyled = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & .dues {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
  }
`;

const Duespage = ({ user }) => {
  const [dues, setDues] = useState(0);
  const [navigate, setNavigate] = useState();

  useEffect(() => {
    axios
      .get(`https://bookportalapi.herokuapp.com/users/findbyid?id=${user.id}`)
      .then((res) => {
        setDues(res.data.due_amt);
      });
  }, []);

  const onButtonClick = () => {
    axios
      .get(`https://bookportalapi.herokuapp.com/users/payoff?id=${user.id}`)
      .then((res) => {
        alert(res.data);
        navigate("/userslanding", { replace: true });
      });
  };

  return (
    <Duespagestyled>
      {user ? (
        <div className="dues">
          <h2>YOU OWE</h2>

          <h1>{dues}Rs</h1>
          {dues > 0 ? <button onClick={onButtonClick}>Pay dues</button> : null}
        </div>
      ) : (
        <p>PLEASE LOGIN TO CHECK YOUR DUES.</p>
      )}
    </Duespagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Duespage);
