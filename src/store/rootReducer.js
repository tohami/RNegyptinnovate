import { combineReducers } from 'redux';

import newsList from './newsListReducer';
import newsDetails from './newsDetailsReducer';


const rootReducer = combineReducers({
  newsList,
  newsDetails,
});

export default rootReducer;