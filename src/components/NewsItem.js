import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

import { colors } from '../utils';

import Avatar from './Avatar';

export default class NewsItem extends Component {

  render() {
    const { news, onSelect } = this.props;
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => onSelect(news)} style={[styles.container, styles.row, styles.center]}>
          <View style={[styles.center, styles.row]}>
            <Avatar rounded height={90} width={90} source={{ uri: news.ImageUrl }} />
            <View style={[styles.column, styles.newsContent]}>
              <Text numberOfLines={3} style={styles.newsTitle}>{news.NewsTitle}</Text>
              <View style={[styles.row]}>
                <Text style={styles.newsMeta}>{news.PostDate}</Text>
                <Text style={styles.newsMeta}>Likes ({news.Likes})</Text>
                <Text style={styles.newsMeta}>{news.NumofViews} Views</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Image style={styles.newsLabel} source={require('../../images/news_article_label.png')} />
      </View>

    );
  }
}

NewsItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  column: {
    flexDirection: 'column',
  },
  container: {
    justifyContent: 'space-around',
    width: '90%',
    height: 110,
    paddingHorizontal: 4,
    paddingVertical: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1
  },
  row: {
    flexDirection: 'row',
  },
  newsMeta: {
    fontSize: 10,
    flex: 1,
    color: colors.primary
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    paddingEnd: 48,

  },
  newsContent: {
    paddingStart: 10,
    flex: 1,
  },
  newsLabel: {
    width: 64,
    height: 41,
    top: 20,
    end: 5,
    position: 'absolute',
  }
});
