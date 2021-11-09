import axios from 'axios';
import {URL_INGREDIENT} from '../../definitions';

export const requestGetIngredients = () => {
    return axios.request({
        method: 'get',
        url: URL_INGREDIENT
    });
};
