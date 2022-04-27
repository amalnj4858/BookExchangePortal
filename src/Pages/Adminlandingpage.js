import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import LandingPageOptions from "../Components/LandingPageOptions";

const AdminLandingPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const AdminLandingPage = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("userslanding", { replace: true });
    }
  }, []);

  return (
    <AdminLandingPageStyled>
      <LandingPageOptions loggedin={user.name} />
    </AdminLandingPageStyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(AdminLandingPage);
