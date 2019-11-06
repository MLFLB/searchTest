import React, { Fragment } from 'react';
import { data } from '../constants/data';
import { addToLocalStorage, removeFromLocalStorage } from '../actions/actionList';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const dispatch = useDispatch();

  const addToStorage = (item) => () => dispatch(addToLocalStorage(item));

  const removeToStorage = (truc) => () => dispatch(removeFromLocalStorage(truc));

  const storageItem = useSelector(state => state.listState.storage);

  const _renderList = () => {
    return data.sort((idx1, idx2) => idx1.id - idx2.id).map(item => (
      <div key={item.id}>
        <ul className="listUl">
          <li className="listLi"><img alt="userpicture" src={item.picture} onClick={addToStorage(item)} />{item.username}</li>
        </ul>
      </div>
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
      Personnes Selectionnées : 
      {_renderStorage()}
      <br/>
      Liste des personnes : 
      {_renderList()}
    </Fragment>
  )
  //return _renderStorage();

  // return _renderList();


}

export default List;