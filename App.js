/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import {colors} from './src/utils';

import AppNavigationContainer from './src/navigation/containers/appNavContainer';

const Root = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor= {colors.primaryDark}
        translucent
      />
      <AppNavigationContainer />
    </SafeAreaView>
  </Provider>
);

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
