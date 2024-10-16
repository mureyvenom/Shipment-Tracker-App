/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useThemeColors } from '@/hooks/useTheme';
import MainStack from '@/navigators/MainStack';
import theme from '@/utils/theme';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import BootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import Toast from 'react-native-toast-message';

LogBox.ignoreLogs([
  'Cannot update a component (`VerifyPhoneScreen`)',
  'Failed prop type: Video: prop type `posterResizeMode`',
]);

const RootNav = () => {
  const { primary, background } = useThemeColors();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: background,
        },
      }}>
      <MainStack />
      <StatusBar backgroundColor={primary} barStyle={'light-content'} />
      <Toast />
    </NavigationContainer>
  );
};

export const ThemeHandler = () => {
  useEffect(() => {
    const init = async () => {
      try {
        await BootSplash.hide({ fade: false });
      } catch (error) {
        console.log('splash error: ', error);
      }
    };
    setTimeout(() => {
      init();
    }, 300);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootNav />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default ThemeHandler;
