/* eslint-disable prettier/prettier */
/**
 * @format
 */
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './App';
import Onboarding1 from './activities/onboarding/Onboarding1';
import Onboarding2 from './activities/onboarding/Onboarding2';
import Onboarding3 from './activities/onboarding/Onboarding3';
import Signup from './activities/authenticate/Signup';
import Signin from './activities/authenticate/Signin';
import ChatIndex from './activities/chat/index'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => ChatIndex);