import React from "react";
import styled from "styled-components";

const OptionCardStyled = styled.div`
& {
    margin-top: 2em;
    gap: 5em;
    margin-bottom:2em;
  }
& .mainbox{
    display: flex;
    flex-direction: column;
    width:20em;
}
& .top-part{
    height:10em;
}
& .title{
    text-decoration: none;
    font-size:1.4em;
    margin-top:0em;
    font-weight:600;
    margin-left:1em;
    margin-right:1em;
}
& .bottom-part{
    background-color:#da0037;
    color:white;
    height:2.5em;
    border-radius:3em;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
}
& .photo{
    height:8em;
    margin-top:1em;
}
`;
export const OptionCard = ({ name, photoURL }) => {
    return (
        <OptionCardStyled className="OptionCardStyled">
            <div className="mainbox">
                <div className="top-part">
                    <div className="image"><img src={photoURL} alt="photo" className="photo" /> </div>
                </div>
                <div className="bottom-part">
                    <div className="title">
                        {name}
                    </div>
                </div>
            </div>
        </OptionCardStyled>
    );
};