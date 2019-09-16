import {
  REQUEST_NEWS_LIST,
  REQUEST_NEWS_LIST_SUCCESS,
  REQUEST_NEWS_LIST_FAIL,
} from '../actions/types';

const initialState = {
  isFetching: false,
  newsList: [],
  error: null,
};

const newsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NEWS_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case REQUEST_NEWS_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        newsList: action.newsList,
      });

    case REQUEST_NEWS_LIST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
};

export default newsListReducer;