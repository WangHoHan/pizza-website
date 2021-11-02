import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../store'

const url = 'http://localhost:3333/api/pizza';

const HomePage = () => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const {loadMenu} = bindActionCreators(actionCreators, dispatch);
    useEffect(() => {
        loadMenu(url);
    }, []);
    return (
        <main>
            <section>
                {menu.map(({id}) => {
                    return <h1>{id}</h1>
                })}
            </section>
        </main>
    );
};

export default HomePage;
