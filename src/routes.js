import {createStackNavigator, createAppContainer} from 'react-navigation';
import Main from './Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);

export default Routes;
