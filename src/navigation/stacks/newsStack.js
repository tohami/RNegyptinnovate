import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import routes from '../routes';
import NewsListContainer from '../../containers/NewsListContainer';
import NewsDetailsContainer from '../../containers/NewsDetailsContainer';
import {HeaderHome, HeaderDetails } from '../../components/Header';



const newsStackNavigatorConfig = {
  initialRouteName: routes.NewsList,

  navigationOptions : ({ navigation }) => {
    let tabBarVisible = true;
    let drawerLockMode = 'unlocked' ;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
      drawerLockMode = 'locked-closed' ; 
    }
  
    return {
      tabBarVisible,
      drawerLockMode,
    };
  }
};

const newsStack = createStackNavigator({
  [routes.NewsList]: {
    screen: NewsListContainer,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderHome navigation={navigation} title="News" />,
    }),
  },
  [routes.NewsDetails]: {
    screen: NewsDetailsContainer,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderDetails navigation={navigation} title="News Details" />,
    }),
  },
}, newsStackNavigatorConfig);

export default newsStack;
