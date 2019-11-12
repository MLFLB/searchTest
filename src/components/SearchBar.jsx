import React, { useState } from 'react';
//import { data } from '../constants/data';
import { useDispatch } from 'react-redux';
import { searchList } from '../actions/actionSearch';

const SearchBar = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState('');


  const _handleChange = (event) => {
    const { value } = event.target;
    console.log('test value CF : ', value);
    setValue(value);
    dispatch(searchList(value)); 

  };



 const _renderInput = () => (
   <input
    className={'inputStyle'}
    type={'text'}
    placeholder={'search a name'}
    value={value}
    onChange={_handleChange} /> 
 )
  

  return (
    <div className="renderInput">
      {_renderInput()}
      <ul>
      </ul>
    </div>
  )
}
// test ?



export default SearchBar;