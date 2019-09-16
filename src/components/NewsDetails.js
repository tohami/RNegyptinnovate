import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import { colors } from '../utils';


class NewsDetails extends Component {

  state = {};

  componentDidMount() {
    const { getNewsDetails } = this.props;
    const { newsItem } = this.props.navigation.state.params;

    getNewsDetails(newsItem.Nid);
  }

  render() {

    const { isFetching, NewsDetails } = this.props;
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
      <ScrollView style={{ backgroundColor: colors.secondaryText }}>
        <View style={[styles.center, styles.column, styles.container]}>
          <Image 
          style={styles.newsImage} 
          source={{ uri: NewsDetails.ImageUrl }} />
          {/* new meta info  */}
          <View style={[styles.row, styles.newsMetaContainer]}>
            <Text style={styles.newsMeta}>{NewsDetails.PostDate}</Text>
            <View style={styles.seperator} />
            <View style={styles.newsMeta}>
              <Image style={{ ...styles.metaIcon, width: 16, height: 16 }} source={require('../../images/like_clicked.png')} />
              <Text style={{ ...styles.newsMeta, flex: undefined }}>Likes ({NewsDetails.Likes})</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.newsMeta}>
              <Image style={{ ...styles.metaIcon, width: 19, height: 10 }} source={require('../../images/views_icon.png')} />
              <Text style={{ ...styles.newsMeta, flex: undefined }}>{NewsDetails.NumofViews} Views</Text>
            </View>
          </View>

          {/* news content */}

          <Text style={styles.newscontent}>{NewsDetails.ItemDescription}</Text> 

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  column: {
    flexDirection: 'column',
  },
  container: {
    width: '90%',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  newsMeta: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1
  },
  metaIcon: {
    marginEnd: 5,
    alignSelf: 'center'
  },
  newscontent: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12

  },
  newsMetaContainer: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.primary,
    paddingStart: 10,
    flex: 1,
  },
  newsImage: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width:'100%',
    height:200,
  },
  seperator: {
    width: StyleSheet.hairlineWidth,
    height: '66%',
    color: colors.white,
    backgroundColor: colors.white
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

export default NewsDetails;