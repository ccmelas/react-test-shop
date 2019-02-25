import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

const StyledHomeProduct = styled.div`
    height: 300px;
    box-shadow: .5px .5px 4px gray;
    border-radius: 10px;
    :hover {
        box-shadow: 2px 2px 4px gray;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 60%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const ProductDetails = styled.div`
    padding: 15px;
`;

const ProductTitle = styled.h4`
    margin: 0px;
    font-family: 'Lucida Grande', Lato, sans-serif;
    font-size: 115%;
`;

const PriceDisplay = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;

    span:first-of-type {
        font-size: 60%;
    }
    span:nth-of-type(2) {
        font-size: 130%;
    }
    span:nth-of-type(3) {
        margin-left: auto;
    }
`;

const HomeProduct = (props) => (
    <StyledHomeProduct>
        <ImageContainer>
            <img src={props.product.image} alt="Product" />
        </ImageContainer>
        <ProductDetails>
            <ProductTitle>
                { props.product.name }
            </ProductTitle>
            <PriceDisplay>
                <span>$</span>
                <span>{ props.product.price.$numberDecimal }</span>
                <span>
                    <Link to={`/${ props.product.id }`}>
                        <Button>View Item →</Button>
                    </Link>
                </span>
            </PriceDisplay>
        </ProductDetails>
    </StyledHomeProduct>
);

HomeProduct.propTypes = {
    product: PropTypes.object.isRequired
};

export default HomeProduct;
