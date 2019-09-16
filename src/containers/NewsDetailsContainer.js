import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NewsDetails from '../components/NewsDetails';

import { getNewsDetails } from '../actions'

const mapStateToProps = state => ({
  NewsDetails: state.newsDetails.newsDetails,
  isFetching: state.newsDetails.isFetching,
  error: state.newsDetails.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getNewsDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
