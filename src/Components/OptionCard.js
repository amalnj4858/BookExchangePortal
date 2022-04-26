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
    background:white;
    width:20em;
}
& .top-part{
    background-color:#3c4959;
    height:10em;
}
& .title{
    text-decoration: none;
    font-size:1.8em;
    margin-top:0em;
    font-weight:600;
    margin-left:1em;
    margin-right:1em;
}
& .bottom-part{
    background-color:#da0037;
    color:white;
    height:3em;
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