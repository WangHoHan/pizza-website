import axios from 'axios';

export const requestGetFood = () => {
    return axios.request({
       method: 'get',
       url: 'http://localhost:3333/api/pizza'
    });
};
