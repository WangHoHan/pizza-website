import axios from 'axios';
import {URL_PIZZA} from '../../definitions';

export const requestGetFood = () => {
    return axios.request({
        method: 'get',
        url: URL_PIZZA
    });
};
