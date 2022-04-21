import React from "react";
import styled from "styled-components";

const OptionCardStyled = styled.div`
& {
    margin-top: 2em;
    gap: 5em;
  }
& .mainbox{
    display: flex;
    flex-direction: column;
    height:10em;
    width:10em;
    background:white;
}
`;
export const OptionCard = ({ name }) => {
    return (
        <OptionCardStyled className="OptionCardStyled">
            <div className="mainbox">
                <div className="image">

                </div>
                <div className="title">
                    {name}
                </div>
            </div>
        </OptionCardStyled>
    );
};