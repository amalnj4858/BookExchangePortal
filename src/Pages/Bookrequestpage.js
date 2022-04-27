import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Bookrequestform from "../Components/Bookrequestform";

const Bookrequestpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bookrequestpage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
    }
  }, []);

  return (
    <Bookrequestpagestyled>
      <Bookrequestform />
    </Bookrequestpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Bookrequestpage);
