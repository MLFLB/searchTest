export const ADD_TO_LOCAL_STORAGE = 'ADD_TO_LOCAL_STORAGE';
export const REMOVE_FROM_LOCAL_STORAGE = 'REMOVE_FROM_LOCAL_STORAGE';

export const addToLocalStorage = (item) => ({
  type: ADD_TO_LOCAL_STORAGE,
  payload: { item }
})

export const removeFromLocalStorage = (index) => ({
  type: REMOVE_FROM_LOCAL_STORAGE,
  payload: { index }
})


