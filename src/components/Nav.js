import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 1px 1px solid gray;
    background: linear-gradient(to bottom, #DB4646, #6E2323);
    box-sizing: border-box;    
    padding: 0 10em;

    @media (max-width: 1120px) {
        padding: 0 3em;
    }

    h1 {
        text-transform: uppercase;
    }
    .navlinks li {
        display: inline-block;
        margin-left: 15px;
    }

    .navlinks a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        padding: 15px;
    }

    .navlinks a.active, .navlinks a:hover {
        color: yellow;
        border-bottom: 2px solid yellow;
    }

    @media (max-width: 514px) {
        height: auto;
        flex-direction: column;
        align-items: center;
        
        .navlinks {
            padding-inline-start: 0px;
            text-align: center;
        }

        .navlinks li {
            margin-bottom: 10px;
        }

        .navlinks a.active, .navlinks a:hover {
            border-bottom: 0px;
        }

        .navlinks a {
            padding: 5px;
        }
    }
`;

const Nav = (props) => (
    <StyledNav>
        <h1>Test Shop</h1>
        <ul className="navlinks">
            <li>
                <NavLink exact 
                    to="/" 
                    activeClassName="active">
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink exact 
                    to="/new" 
                    activeClassName="active">
                    Create New
                </NavLink>
            </li>
        </ul>
    </StyledNav>
);

export default Nav;
