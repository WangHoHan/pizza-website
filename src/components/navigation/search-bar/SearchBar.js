import React from 'react';
import {useDispatch} from 'react-redux';
import {actionCreators} from '../../../store';
import {bindActionCreators} from 'redux';
import './SearchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const {setSearchBarData} = bindActionCreators(actionCreators, dispatch);

    const handleSearchBarOnInput = (e) => {
        setSearchBarData(e.target.value);
    };

    return (
        <input className='input-search-bar' type='text' placeholder='<3' onInput={handleSearchBarOnInput} />
    );
};

export default SearchBar;
