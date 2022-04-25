//import React, { useState, useEffect } from "react";
import styled from "styled-components";


const BookCardStyled = styled.div`
	& {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	& .mainbox {
		width:fit-content;
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		box-shadow: 10px 10px 5px #E2CFEA;
	}
	& .topbox {
		height: 2em;    
		padding-bottom: 0.5em;
		text-align: center;
		background-color: #da0037;
		font-family: Roboto;
		text-align: bottom;
		display: flex; 
		flex-direction: column-reverse;
		font-size: 1.3rem;
		font-weight: 600;
		border-bottom: 2px solid black;
	}
	& .bottombox {
        background-color:#2e4353;
        padding-left:2em;
        padding-right:2em;
        display:flex;
        flex-direction:column;
        gap:2em;
	}
    & .left{
        display:flex;
        flex-direction:column;
        text-align:left;
        gap:1.5em;
    }
    & .right{
        display:flex;
        flex-direction:column;
        justify-self:right;
        gap:1.5em
		width:10em;
    }
	& .lender-adress{
		display:flex;
		flex-wrap:wrap;
	}
	& .desc {
		margin-top: 1em;
		font-size: 1rem;
		font-family: Roboto;
		font-weight: 500;
		display: flex;
		margin-right: 2em;
		text-align: center;
        display:flex;
		flex-wrap: wrap;
		font-family: 'Lato', sans-serif;	
        gap:10em;
	}
    & .icon-desc{
        display:flex;
        flex-wrap:wrap;
        gap:1em;
    }
	& .name {
		font-size: 1.7rem;
		margin-bottom:-0.1em;
	}
    & .heading{
        font-weight:800;
        text-decoration:underline;
    }

    & .book_status{
        margin-bottom:0em;
        align-self:center;
        display:flex;
        flex-wrap:wrap;
        gap:0.5em;
    }
    & .available{
        margin-top:-0.2em;
    }
	@media (max-width: 768px) {
		.desc{
			text-align:center;
			justify-content:center;
			margin-right:auto;
			margin-left:auto;
		}
		}
		
		.icon{
			margin-right:0.2em;
		}
	}
	@media (max-width: 992px) {
		.desc{
			text-align:center;
			justify-content:center;
			margin-right:auto;
			margin-left:auto;
		}
		
		.icon{
			margin-right:0.2em;
		}
	}
`;

export const BookCard = ({
	name,
	author,
	publisher,
	lender_name,
	lender_address,
	book_status,
}) => {
	return (
		<BookCardStyled>
		<div className="mainbox">
              <div className="topbox">
                <div className="name">{name}</div>
              </div>
              <div className="bottombox">
                <div className="desc">
                    <div className="left">
                        <div className="author icon-desc"><i class="fa fa-user icon" aria-hidden="true"></i> <span className="heading">Author:</span> {author}</div>
                        <div className="publisher icon-desc"><i class="fa fa-building icon" aria-hidden="true"></i> <span className="heading">Publisher:</span>  {publisher} </div>
                    </div>
                    <div className="right">
                        <div className="lender_name icon-desc"><i class="fa fa-users icon" aria-hidden="true"></i> <span className="heading">Lender Name:</span> {lender_name} </div>
                        <div className="lender_adress icon-desc"><i class="fa fa-address-card-o icon" aria-hidden="true"></i> <span className="heading">Lender Address:</span> {lender_address} </div>
                    </div>
                    </div>
                    <div className="book_status icon-desc"><i class="fa fa-superpowers icon" aria-hidden="true"></i><p className="available">{book_status}</p> </div>
              </div>
            </div>
			
		</BookCardStyled>
	);
};
