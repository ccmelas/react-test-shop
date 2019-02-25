import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInfoDisplay = styled.p`
    border: ${props => props.type === 'error' ? '1px solid red' : '1px solid green'};
    background: ${props => props.type === 'error' ? 'rgba(200, 0, 0, .1)' : 'rgba(0, 200, 0, .1)'};
    color: ${props => props.type === 'error' ? 'red' : 'green'};
    padding: .7em;
    border-radius: 5px;
    margin-bottom: 30px;
`;

const InfoDisplay = (props) => (
    <StyledInfoDisplay {...props}>
        { props.text }
    </StyledInfoDisplay>
);

InfoDisplay.propTypes = {
    text: PropTypes.string.isRequired
};

export default InfoDisplay;