import axios from 'axios';
import {URL_SAUCE} from '../../definitions';

export const requestGetSauces = () => {
    return axios.request({
        method: 'get',
        url: URL_SAUCE
    });
};
