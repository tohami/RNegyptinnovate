import { createDrawerNavigator } from 'react-navigation-drawer';
import newsStack from './newsStack';
import SideMenu from '../SideMenu';
import {
  Dimensions,
} from 'react-native';



export default DrawerNavContainer = createDrawerNavigator(
    {
      Home: {
        screen: newsStack,
        navigationOptions: {
          drawerLabel: 'Home',
        },
      },
    },
    {
      contentComponent:SideMenu ,
      drawerWidth: Dimensions.get('window').width - 265,
      drawerBackgroundColor: "transparent ",
    }
  );