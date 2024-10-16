import { NavigatorScreenParams } from '@react-navigation/native';

export type MainStack = {
  AnimatedSplash: undefined;
  Login: undefined;
  PostSplash: undefined;
  Tabs: NavigatorScreenParams<BottomTabList>;
};

export type BottomTabList = {
  Shipments: undefined;
  Scan: undefined;
  Wallet: undefined;
  Profile: undefined;
};
