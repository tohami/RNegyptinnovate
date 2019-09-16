import {
  REQUEST_NEWS_LIST,
  REQUEST_NEWS_LIST_SUCCESS,
  REQUEST_NEWS_LIST_FAIL,
  
  REQUEST_NEWS_DETAILS,
  REQUEST_NEWS_DETAILS_SUCCESS,
  REQUEST_NEWS_DETAILS_FAIL,
} from './types';

import { fetchNewsDetails, fetchNews } from '../api';


export const getNewsList = () => async (dispatch) => {

  dispatch(requestNewsList());

  const { error, success, payload } = await fetchNews();

  if (success) {
    dispatch(requestNewsListSuccess(payload));
  } else {
    dispatch(requestNewsListFailed(error));
  }
};


export const getNewsDetails = (newsId) => async (dispatch) => {

  dispatch(requestNewsDetails());

  const { error, success, payload } = await fetchNewsDetails(newsId);

  if (success) {
    dispatch(requestNewsDetailsSuccess(payload));
  } else {
    dispatch(requestNewsDetailsFailed(error));
  }
};


/* news list dispach */

export const requestNewsList = () => ({
  type: REQUEST_NEWS_LIST,
});

export const requestNewsListSuccess = newsList => ({
  type: REQUEST_NEWS_LIST_SUCCESS,
  newsList,
});

export const requestNewsListFailed = error => ({
  type: REQUEST_NEWS_LIST_FAIL,
  error,
});

//news details dispach

export const requestNewsDetails = () => ({
  type: REQUEST_NEWS_DETAILS,
});

export const requestNewsDetailsSuccess = newsDetails => ({
  type: REQUEST_NEWS_DETAILS_SUCCESS,
  newsDetails,
});

export const requestNewsDetailsFailed = error => ({
  type: REQUEST_NEWS_DETAILS_FAIL,
  error,
});
