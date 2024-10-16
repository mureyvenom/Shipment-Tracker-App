import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedSplashScreen from '@/screens/AnimatedSplashScreen';
import { MainStack as MainStackType } from '@/utils/ParamList';
import PostSplashScreen from '@/screens/Authentication/PostSplashScreen';
import LoginScreen from '@/screens/Authentication/LoginScreen';
import BottomTab from './BottomTab';
import { useAuth } from '@/state/hooks/user.hook';
import { useSettings } from '@/state/hooks/settings.hook';

const Stack = createNativeStackNavigator<MainStackType>();

const MainStack = () => {
  const { user } = useAuth();
  const { splashLoaded } = useSettings();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!splashLoaded && (
        <Stack.Screen name="AnimatedSplash" component={AnimatedSplashScreen} />
      )}
      {!user?.full_name ? (
        <Stack.Group>
          <Stack.Screen name="PostSplash" component={PostSplashScreen} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Tabs" component={BottomTab} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
