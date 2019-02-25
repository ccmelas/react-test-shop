import React from 'react';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
    margin-bottom: 2em;
    label {
        display: block;
        margin-bottom: 5px;
    }

    input, textarea {
        display: block;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #B1AEAE;
        padding: 1em 1em;
        box-sizing: border-box;
        transition: .2s ease-in all;
        font-family: Monaco, sans-serif;
    }

    input:focus, textarea:focus {
        outline: 0;
        border-width: 2px;
    }
`;


const InputGroup = (props) => (
    <StyledInputGroup>
        { props.type === "textarea"  ? <textarea {...props}></textarea> : <input {...props}/>}
    </StyledInputGroup>
);

export default InputGroup;