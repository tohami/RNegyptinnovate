//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import { colors } from '../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SideMenu extends Component {
  items = [
    {
      navOptionThumb: require('../../images/drawer_news_icon.png'),
      navOptionName: 'News',
      id: 'news',
    },
    {
      navOptionThumb: require('../../images/drawer_map_icon.png'),
      navOptionName: 'Innovation Map',
      id: 'map',
    },
    {
      navOptionThumb: require('../../images/drawer_events_icon.png'),
      navOptionName: 'Event Calender',
      id: 'events',
    }, {
      navOptionThumb: require('../../images/drawer_leadership_icon.png'),
      navOptionName: 'Leadership Thoughts',
      id: 'thoughts',
    },
    {
      navOptionThumb: require('../../images/drawer_lang_icon.png'),
      navOptionName: 'Change Language',
      id: 'language',
    },
  ];
  render() {
    return (
      <View style={styles.sideMenuContainer}>

        <FlatList
          data={this.items}
          keyExtractor={(item) => `k=${item.id}`}
          renderItem={({ item }) => <NavItem item={item} navigation = {this.props.navigation} />}
        />
      </View>
    );
  }
}

const NavItem = props => {
  const { item, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        if (item.id === 'language') return;
        else {
          window.alert(item.navOptionName + " clicked")
          navigation.closeDrawer()
        }
      }}
      style={styles.sidemenuItemContainer}>
      <View >
        <Image style={styles.sideMenuIcon} source={item.navOptionThumb} color="#808080" />
      </View>
      <Text
        style={styles.sidemenuText}>
        {item.navOptionName}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    paddingTop: 20,
  }, sideMenuIcon: {
    width: 100,
    height: 100,
    resizeMode: 'center'
  },
  sidemenuItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'transparent',

  },
  sidemenuText: {
    fontSize: 15,
    textTransform: 'uppercase',
    paddingHorizontal:8 ,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  }
});
