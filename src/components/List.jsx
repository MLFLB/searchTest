import React, { Fragment } from 'react';
import { data } from '../constants/data';
import { addToLocalStorage, removeFromLocalStorage } from '../actions/actionList';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const dispatch = useDispatch();

  const addToStorage = (item) => () => dispatch(addToLocalStorage(item));

  const removeToStorage = (truc) => () => dispatch(removeFromLocalStorage(truc));

  const storageItem = useSelector(state => state.listState.storage);
  const toto = useSelector(state => state.searchState.inputStorage);
  console.log('inputStorage from list : ', toto);

  
  const _renderList = () => { 
  

    return data.sort((idx1, idx2) => idx1.id - idx2.id).filter(machin => machin.username.toLowerCase().startsWith(toto.toLowerCase()) ).map(item => (
      
        <ul className="listUl" key={item.id}>
          <li className="listLi"><img alt="userpicture" src={item.picture} onClick={addToStorage(item)} />{item.username}</li>
        </ul>
   
    ))
  }

  const _renderStorage = () => {
    return storageItem.sort((idx3, idx4) => idx3.id - idx4.id).map(truc => (
      <div key={truc.id}>
      <ul className="listUl">
        <li className="listLi"><img alt="userpicture" src={truc.picture} onClick={removeToStorage(truc)} />{truc.username}</li>
      </ul>
    </div>
    ))
  }

  return (
    <Fragment>
      <span className="titleRender">Personnes Selectionnées : </span>
      <div className="renderList">
      {(!toto) && _renderStorage()}
      </div>
      <br/>
      <span className="titleRender">Liste des personnes : </span>
      <div className="renderList">
      {_renderList()}
      </div>
    </Fragment>
  )

}

export default List;