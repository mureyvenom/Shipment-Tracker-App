import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabList } from '@/utils/ParamList';
import BaseScree from '@/screens/BaseScree';
import { Platform, StatusBar } from 'react-native';
import { useThemeColors, useThemeTextVariants } from '@/hooks/useTheme';
import ShipmentsIcon from '@/components/tabicons/ShipmentsIcon';
import ScanIcon from '@/components/tabicons/ScanIcon';
import ShipmentsScreen from '@/screens/Tabs/ShipmentsScreen';
import WalletIcon from '@/components/tabicons/WalletIcon';
import ProfileIcon from '@/components/tabicons/ProfileIcon';

const Tab = createBottomTabNavigator<BottomTabList>();

const BottomTab = () => {
  const { placeholder, primary, disabled_button, background } =
    useThemeColors();
  const { regular } = useThemeTextVariants();

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(background);
    }
  }, [background]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: placeholder,
        tabBarActiveTintColor: primary,
        tabBarStyle: {
          minHeight: Platform.OS === 'android' ? 80 : 90,
          paddingTop: Platform.OS === 'android' ? 10 : 12,
          ...(Platform.OS === 'android' ? { paddingBottom: 15 } : {}),
          borderTopColor: disabled_button,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontFamily: regular.fontFamily,
          fontSize: 11,
        },
      }}>
      <Tab.Screen
        name="Shipments"
        component={ShipmentsScreen}
        options={{
          tabBarIcon: ({ color }) => <ShipmentsIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={BaseScree}
        options={{
          tabBarIcon: ({ color }) => <ScanIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={BaseScree}
        options={{
          tabBarIcon: ({ color }) => <WalletIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={BaseScree}
        options={{
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
