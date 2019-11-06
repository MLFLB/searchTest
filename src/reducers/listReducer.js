import { ADD_TO_LOCAL_STORAGE, REMOVE_FROM_LOCAL_STORAGE } from '../actions/actionList';

const initialState = {
  storage: []
};

const addToLocalStorage = (storage, item) => {
  const itemToStock  = storage.find((ite) => ite.id === item.id);

  if(itemToStock) {
    const idx = storage.findIndex((ite) => ite.id === item.id);
    storage[idx] = {
      ...storage[idx],
      storage : localStorage.setItem('itemInLocalStorage', JSON.stringify(item))
    };
    console.log(storage)
    return storage;
  } else {
    const newItemToStock = {
      ...item,
    };
    return [...storage, newItemToStock];
  }
}

const removeFromLocalStorage = (storage, item) => {

  const itemToRemove = storage.find((iteme) => iteme.id === item.id);
  console.log(' id : ', itemToRemove);
  const indexToRemove = storage.findIndex((iteme) => iteme.id === item.id);

  if(itemToRemove) {
    // console.log(' findItemLocal : ', localStorage.getItem(JSON.stringify(item)));
    console.log(' findItemLocal : ', localStorage.removeItem(itemToRemove));
    storage.splice(indexToRemove, 1);
    localStorage.removeItem('itemToRemoveFromLocalStorage', itemToRemove);
    // localStorage.clear();
    console.log('storage1 : ', storage);
    return [...storage];
  } else {
    storage[indexToRemove] = {
      ...storage[indexToRemove],
      storage : localStorage.removeItem('itemToRemoveFromLocalStorage', JSON.stringify(item))
    }
    console.log('storage2 : ',storage);
    return [...storage];
  }
}

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LOCAL_STORAGE: {
      const { item } = action.payload;
      const { storage } = state;
      const newItem = addToLocalStorage(storage, item);
      console.log('data : ', newItem);
      return {
        ...state,
        storage: newItem,
      }
    }
    case REMOVE_FROM_LOCAL_STORAGE: {
      const { index } = action.payload;
      const { storage } = state;
      const removeItem = removeFromLocalStorage(storage, index);
      console.log('dataToRemove : ', removeItem);
      return {
        ...state,
        storage: removeItem,
      }
    }
  
    default:
      return state;
  }

}

export default listReducer; 