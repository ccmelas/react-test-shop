import React from 'react';
import styled from 'styled-components';

import SingleProduct from './../components/SingleProduct';
import PageTitle from './../components/PageTitle';
import Nav from './../components/Nav';

import { DataProvider } from './../components/DataProvider';

const PageContainer = styled.section`
    padding: 4em 10em;
    @media (max-width: 1200px) {
        padding: 2em;
    }
`;
const ProductContainer = styled.section`
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductDisplay = ({ product }) => (
    <ProductContainer>
        {product && <SingleProduct product={product} />}
    </ProductContainer>
);

const Product = (props) => (
    <PageContainer>
        <Nav/>
        <PageTitle text="View Product" />
        <DataProvider url={`/products/${props.match.params.id}`} render={({ data }) => <ProductDisplay product={data}/>}/>
    </PageContainer>
);

export default Product;
