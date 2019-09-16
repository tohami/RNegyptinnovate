import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';
import Share from 'react-native-share'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../utils'

const mapStateToProps = state => ({
  newsDetails: state.newsDetails.newsDetails,
  isFetching: state.newsDetails.isFetching,
});

//export header of details screen 
export const HeaderDetails = connect(mapStateToProps, null)(
  ({ newsDetails, isFetching, title, navigation }) => (
    <View style={[stylesHome.container, stylesHome.buttonContainer]}>
      <TouchableOpacity style={stylesHome.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>
      <Text style={stylesHome.title}>{title}</Text>
      <TouchableOpacity
        style={stylesHome.backButton}
        onPress={() => {
          if (!isFetching) {
            const shareOptions = {
              title: 'Share via',
              message: `Check ${newsDetails.NewsTitle}`,
              url: newsDetails.ShareURL,
            };
            Share.open(shareOptions)
          }
        }}>
        <Image style={{ width: 16, height: 18 }} source={require('../../images/share_ic.png')} color="#fff" />
      </TouchableOpacity>
    </View>
  )
);

//export header of home screen connected to redux 
export const HeaderHome = ({ title, navigation }) => (
  <View style={[stylesHome.container, stylesHome.buttonContainer]}>
    <TouchableOpacity style={stylesHome.backButton} onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" size={20} color="#fff" />
    </TouchableOpacity>
    <Text style={stylesHome.title}>{title}</Text>
    <TouchableOpacity style={stylesHome.backButton} onPress={() => window.alert("Filter Clicked")}>
      <Image style={{ width: 16, height: 16 }} source={require('../../images/filter.png')} color="#fff" />
    </TouchableOpacity>
  </View>
);

const stylesHome = StyleSheet.create({
  backButton: {
    paddingRight: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 15,
    width: '100%',
    elevation: 2,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
});

