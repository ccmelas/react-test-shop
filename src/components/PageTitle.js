import React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.h1`
    padding-left: 15px;
    border-left: 3px solid #DB4646;
    text-transform: uppercase;
    margin-bottom: 50px;
`;

const PageTitle = (props) => (
    <StyledPageTitle>
        {props.text || 'Page Title'}
    </StyledPageTitle>
);

export default PageTitle;
