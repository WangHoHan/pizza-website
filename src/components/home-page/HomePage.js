import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store'

const HomePage = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const {loadMenu} = bindActionCreators(actionCreators, dispatch);
    return (
        <h1 onClick={() => loadMenu()}>
            {menu}
        </h1>
    );
};

export default HomePage;
