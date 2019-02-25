import axios from 'axios';

import { host } from './host';

const buildError = (error) => {
    const errors = [];
    console.log(error.response);
    console.log(error);
    switch (error.response.status) {
        case 401:
            errors.push('Authorization Failed.');
            break;
        case 422:
            // Invalid Data
            error.response.data.errors.forEach(error => errors.push(error));
            break;
        default:
            errors.push('An unknown error occurred');
    }

    return { errors };
}

export const makeRequest = async (endpoint, method = 'GET', data = {}, config = {}) => {
    try {
        const response = await axios({ 
            method,
            url: `${host}${endpoint}`,
            data,
            config
        });

        return response.data;

    } catch (error) {
        return buildError(error);
    }
}