import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getNewsList , onNewsListScrollChanged } from '../actions';

import NewsList from '../components/NewsList';

const mapStateToProps = state => ({
  newsList: state.newsList.newsList,
  isFetching: state.newsList.isFetching,
  error: state.newsList.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNewsList,
  onNewsListScrollChanged
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
