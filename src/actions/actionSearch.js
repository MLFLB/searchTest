export const SEARCH_LIST = 'SEARCH_LIST';

export const searchList = (username) => ({
  type: SEARCH_LIST,
  payload: { username },
});