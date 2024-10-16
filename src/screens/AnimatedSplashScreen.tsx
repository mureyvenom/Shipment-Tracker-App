import { Dimensions } from 'react-native';
import React from 'react';
import Box from '@/components/Box';
import LottieView from 'lottie-react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStack } from '@/utils/ParamList';
import { useDispatch } from 'react-redux';
import { updateSplashStatus } from '@/state/reducers/settings.reducer';

interface Props {
  navigation: NativeStackNavigationProp<MainStack, 'AnimatedSplash'>;
}

const AnimatedSplashScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  return (
    <Box flex={1} backgroundColor="primary">
      <Box justifyContent="center" alignItems="center" flex={1}>
        <LottieView
          autoPlay={navigation.isFocused()}
          loop={false}
          speed={0.7}
          onAnimationFinish={() => {
            // navigation.navigate('PostSplash');
            dispatch(
              updateSplashStatus({
                value: true,
              }),
            );
          }}
          style={{
            width: '100%',
            height: Dimensions.get('window').height,
            borderWidth: 4,
            borderColor: 'red',
            transform: [
              {
                scale: 1.1,
              },
            ],
          }}
          source={require('@/assets/splash/animate-2.json')}
        />
      </Box>
    </Box>
  );
};

export default AnimatedSplashScreen;
