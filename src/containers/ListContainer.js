import { connect } from 'react-redux';

import List from '../components/List';
import { addToLocalStorage, removeFromLocalStorage } from '../actions/actionList';

const mapDispatchToProps = {
  addToLocalStorage,
  removeFromLocalStorage
};

export default connect(null, mapDispatchToProps)(List);