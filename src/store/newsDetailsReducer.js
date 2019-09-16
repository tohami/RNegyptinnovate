import {
  REQUEST_NEWS_DETAILS,
  REQUEST_NEWS_DETAILS_SUCCESS,
  REQUEST_NEWS_DETAILS_FAIL,
} from '../actions/types';

const initialState = {
  isFetching: true,
  newsDetails: null,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NEWS_DETAILS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case REQUEST_NEWS_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        newsDetails: action.newsDetails,
      });

    case REQUEST_NEWS_DETAILS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default newsReducer;