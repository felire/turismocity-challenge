import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import Routes from '@constants/routes';
import { mainSwitchNavConfig, appStackNavConfig } from '@config/navigation';
import { inferRoute } from '@utils/navUtils';
import InitialLoading from '@screens/InitialLoading';
import GalleryApp from '@screens/GalleryApp';
import ImageDetail from '@screens/ImageDetail';

const AppStack = createStackNavigator(
  {
    ...inferRoute({ GalleryApp }),
    ...inferRoute({ ImageDetail })
  },
  appStackNavConfig
);

const SwitchNavigator = createAnimatedSwitchNavigator(
  {
    ...inferRoute({ InitialLoading }),
    [Routes.App]: AppStack
  },
  mainSwitchNavConfig
);

export default createAppContainer(SwitchNavigator);
