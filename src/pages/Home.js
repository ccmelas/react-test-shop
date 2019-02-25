import React from 'react';
import styled from 'styled-components';

import HomeProduct from './../components/HomeProduct';
import PageTitle from './../components/PageTitle';
import Nav from './../components/Nav';

import { DataProvider } from './../components/DataProvider';

const StyledHome = styled.section`
    min-height: 100%;
    padding: 2em 10em;
    margin-top: 50px;
    @media (max-width: 600px) {
        padding: 3em;
        margin-top: 20px;
    }
    @media (min-width: 601px) and (max-width: 1120px) {
        padding: 3em;
        margin-top: 20px;
    }
`;

const ProductGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 40px;
    }
    @media (min-width: 501px) and (max-width: 750px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 751px) and (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ProductDisplay = ({ products }) => (
    <ProductGrid>
        {products && products.map(product => <HomeProduct key={product.id} product={product} />)}
    </ProductGrid>
);

const Home = () => (
    <StyledHome>
        <Nav/>
        <PageTitle text="All Products" />
        <DataProvider url="/products" render={({ data }) => <ProductDisplay products={data}/>}/>
    </StyledHome>
);

export default Home;