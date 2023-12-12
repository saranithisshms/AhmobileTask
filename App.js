/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  LogBox,

} from 'react-native';

import NavigationPage from './src/navigation';

const App = () => {
  LogBox.ignoreLogs(['Warning message']);

  return (
    <NavigationPage />
  )

}



export default App;
