import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from './../components/Nav';
import PageTitle from './../components/PageTitle';
import InputGroup from './../components/InputGroup';
import Button from './../components/Button';
import InfoDisplay from './../components/InfoDisplay';

import { makeRequest } from './../services/http';

const PageContainer = styled.section`
    padding: 4em 10em;
    @media (max-width: 1200px) {
        padding: 2em;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
`;

const StyledForm = styled.section`
    width: 50%;
    box-shadow: 2px 2px 4px gray;
    padding: 2em 2em;
`;

class ProductForm extends Component {
    state = {
        loading: false,
        name: '',
        price: 0,
        description: '',
        color: '',
        category: '',
        image: '',
        errors: [],
        successes: []
    };

    handleChange = (name, file = false) => event => {
        this.setState({ [name]: file ? event.target.files[0] : event.target.value });
    }

    render() {
        const { loading, errors, successes } = this.state;
        return (
            <PageContainer>
                <Nav/>
                <StyledForm>
                    <PageTitle text="Add Product" />
                    <form onSubmit={this.createProduct}>
                        { errors.map((error, i) => <InfoDisplay type="error" key={i} text={error}/>) }
                        { successes.map((success, i) => <InfoDisplay key={i} text={success}/>) }
                        <InputGroup
                            type="text"
                            placeholder="Product Name"
                            required="required"
                            onChange={this.handleChange('name')} />
                        <InputGroup
                            type="number"
                            placeholder="Product Price"
                            required="required"
                            onChange={this.handleChange('price')} />
                        <InputGroup
                            type="text"
                            placeholder="Product Color"
                            required="required"
                            onChange={this.handleChange('color')} />
                        <InputGroup
                            type="text"
                            placeholder="Product Category"
                            required="required"
                            onChange={this.handleChange('category')} />
                        <InputGroup
                            type="textarea"
                            rows="4"
                            placeholder="Product Description"
                            required="required"
                            onChange={this.handleChange('description')} />
                        <InputGroup
                            type="file"
                            required="required"
                            accept="image/*"
                            onChange={this.handleChange('image', true)} />
                        <Button type="submit" loading={loading}>ADD PRODUCT</Button>
                    </form>
                </StyledForm>
            </PageContainer>
        );
    }

    createProduct = async (event) => {
        event.preventDefault();
        this.setState({ errors: [] });

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const data = new FormData();
        const properties = ['name', 'price', 'description', 'color', 'category', 'image'];
        properties.forEach(property => data.append(property, this.state[property]));
        this.setState({ loading: true });

        const response = await makeRequest('/products', 'POST', data, config);

        if (!response.errors) {
            this.props.history.push(`/${ response.data.id }`); 
            this.setState({ loading: false, successes: [response.message] });
        } else {
            this.setState({ loading: false, errors: response.errors});
        }
    }
}

export default ProductForm;
