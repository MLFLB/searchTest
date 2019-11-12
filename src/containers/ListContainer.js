import { connect } from 'react-redux';

import List from '../components/List';
import { addToLocalStorage, removeFromLocalStorage } from '../actions/actionList';

const mapStateToProps = (state) => ({
  inputStorage: state.searchState.inputStorage,
});

const mapDispatchToProps = {
  addToLocalStorage,
  removeFromLocalStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(List);