import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';

import NavigationService from '../navigationService';

import drawerStack from '../stacks/drawerStack';

const AppContainer = createAppContainer(drawerStack);

class AppNavContainer extends PureComponent {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default AppNavContainer;
