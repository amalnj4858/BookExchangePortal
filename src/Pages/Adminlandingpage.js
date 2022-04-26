import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LandingPageOptions from "../Components/LandingPageOptions";

const AdminLandingPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
const AdminLandingPage = ({ user }) => {
  return (
    <AdminLandingPageStyled>
      <LandingPageOptions loggedin={user.name} />
    </AdminLandingPageStyled>
  );
};

const mapStateToProps = (state) => ({ user: state.users });

export default connect(mapStateToProps)(AdminLandingPage);
