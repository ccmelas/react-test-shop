import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';

const StyledSingleProduct = styled.div`
    height: 400px;
    width: 55%;
    display: flex;
    box-shadow: 1px 1px 4px gray;
    border-radius: 10px;
    position: relative;
    @media (max-width: 720px) {
        width: 100%;
        flex-direction: column;
        height: auto;
    }

    @media (min-width: 601px) and (max-width: 1200px) {
        width: 60%;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    img {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 720px) {
        width: 100%;
        height: 200px;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 10px;

        img {
            border-bottom-left-radius: 0px;
            border-top-right-radius: 10px;
        }
    }
`;

const ProductDetails = styled.div`
    padding: 20px;
`;

const ProductTitle = styled.h4`
    margin: 0px;
    font-family: 'Lucida Grande', Lato, sans-serif;
    font-size: 160%;
    text-transform: uppercase;
`;

const ProductCategory = styled.p`
    color: #695F5F;
    text-transform: uppercase;
    font-size: 60%;
`;

const PriceDisplay = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;

    span:first-of-type {
        font-size: 100%;
        margin-right: 5px;
    }
    span:nth-of-type(2) {
        font-size: 200%;
    }
`;
const ProductDescription = styled.p`
    margin-top: 30px;
    margin-bottom: 30px;
    color: #695F5F;
    font-family: Noteworthy;
    font-size: 80%;
`;

const ProductColors = styled.p`
    color: #695F5F;
    font-size: 80%;
    text-transform: uppercase;
`;

const BuyButton = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

const SingleProduct = (props) => (
    <StyledSingleProduct>
        <ImageContainer>
            <img src={props.product.image} alt="Product" />
        </ImageContainer>
        <ProductDetails>
            <ProductTitle>
                {props.product.name}
            </ProductTitle>
            <ProductCategory>
                {props.product.category}
            </ProductCategory>
            <ProductDescription>
                {props.product.description}
            </ProductDescription>
            <ProductColors>
                {props.product.color}
            </ProductColors>
            <PriceDisplay>
                <span>$</span>
                <span>{ props.product.price.$numberDecimal }</span>
            </PriceDisplay>
            <BuyButton>
                <Button>BUY NOW</Button>
            </BuyButton>
        </ProductDetails>
    </StyledSingleProduct>
);

SingleProduct.propTypes = {
    product: PropTypes.object.isRequired
};

export default SingleProduct;
