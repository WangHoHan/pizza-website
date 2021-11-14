import React from 'react';
import {useSelector} from 'react-redux';
import './OrderPage.css'

const OrderPage = () => {
    const sauces = useSelector((state) => state.sauces);

    return <h1>hello</h1>
};

export default OrderPage;
