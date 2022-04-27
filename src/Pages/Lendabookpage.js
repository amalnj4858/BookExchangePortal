import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Lendabookform from "../Components/Lendabookform";

const Lendabookpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lendabookpage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
      return;
    }
  });

  return (
    <Lendabookpagestyled>
      <Lendabookform />
    </Lendabookpagestyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(Lendabookpage);
