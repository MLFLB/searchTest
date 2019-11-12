import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { searchList } from '../actions/actionSearch';

const mapDispatchToProps = {
  searchList,
};

export default connect(null, mapDispatchToProps)(SearchBar);