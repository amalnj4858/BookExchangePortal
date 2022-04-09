import React from "react";
import styled from "styled-components";
import Lendabookform from "../Components/Lendabookform";

const Lendabookpagestyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lendabookpage = () => {
  return (
    <Lendabookpagestyled>
      <Lendabookform />
    </Lendabookpagestyled>
  );
};

export default Lendabookpage;
