import React, { Component } from 'react';

import { ActivityIndicator, FlatList , StyleSheet, Text, View } from 'react-native';

import NewsItem from './NewsItem';

import routes from '../navigation/routes';

import NavigationService from '../navigation/navigationService';
import { colors } from '../utils';

class NewsList extends Component {
  state = { }

  componentDidMount() {
    const { getNewsList } = this.props;
    getNewsList();
  }

  toNewsDetails = newsItem => {
    NavigationService.navigate(routes.NewsDetails, { newsItem })
  }

  render() {

    const { newsList, isFetching } = this.props;

    if (isFetching) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#1976D2" />
          <View style={styles.loadingTextContainer}>
            <Text>
              Loading news...
            </Text>
          </View>
        </View>
      )
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={newsList}
          keyExtractor={(item) => `k=${item.Nid}`}
          renderItem={({ item }) => <NewsItem onSelect={this.toNewsDetails} news={item} />}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.secondaryText
  },
  containerLoading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingTextContainer: {
    marginTop: 5,
  },
});

export default NewsList;