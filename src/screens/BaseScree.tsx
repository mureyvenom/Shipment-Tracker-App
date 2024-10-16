import { SafeAreaView } from 'react-native';
import React from 'react';
import Box from '@/components/Box';
import Text from '@/components/Text';

const BaseScree = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Center</Text>
      </Box>
    </SafeAreaView>
  );
};

export default BaseScree;
