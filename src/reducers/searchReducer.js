import { SEARCH_LIST } from '../actions/actionSearch';

const initialState = {
  inputStorage: '',
}

function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_LIST: {
      const { username } = action.payload;
      return {
        ...state,
        inputStorage: username,
      };
    }
    default: 
    return state
  }
}
export default searchReducer;