import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 0;
    border-radius: 5px;
    color: white;
    padding: .5em 1em;
    background: linear-gradient(to bottom, #DB4646, #6E2323);
    cursor: ${ props => props.loading ? 'not-allowed': 'pointer'};
    transition: .5s all linear;
    :hover {
        color: #6E2323;
        background: white;
        border: 1px solid #6E2323;
    }
`;

const Button = (props) => (
    <StyledButton {...props} disabled={props.loading ? 'disabled': false}>
        { props.loading ? 'Hang on...' : props.children}
    </StyledButton>
);

export default Button;

