import { SafeAreaView } from 'react-native';
import React from 'react';
import Box from '@/components/Box';
import Button from '@/components/Button';
import ScaledImage from '@/components/ScaledImage';
import { MainStack } from '@/utils/ParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<MainStack, 'PostSplash'>;
}

const PostSplashScreen = ({ navigation }: Props) => {
  return (
    <Box flex={1} backgroundColor="primary">
      <SafeAreaView style={{ flex: 1 }}>
        <Box justifyContent="space-between" flex={1}>
          <Box />
          <Box alignItems="center">
            <ScaledImage
              height={36}
              source={require('@/assets/images/logo.png')}
            />
          </Box>
          <Box paddingHorizontal="l" marginBottom="xl">
            <Button
              textProps={{
                color: 'primary',
              }}
              buttonProps={{
                backgroundColor: 'white',
              }}
              displayText="Login"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default PostSplashScreen;
