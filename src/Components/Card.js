import React from "react";
import styled from "styled-components";

const Cardstyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .box {
    padding: 1em;
  }
`;

const Card = ({ data }) => {
  return (
    <Cardstyled>
      {data.map((row) => (
        <div className="box">
          {Object.keys(row).map((key) => (
            <div>
              {key} : {row[key]}
            </div>
          ))}
        </div>
      ))}
    </Cardstyled>
  );
};

export default Card;
