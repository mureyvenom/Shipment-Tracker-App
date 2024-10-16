import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from './Box';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useThemeColors } from '@/hooks/useTheme';
import { addAlpha } from '@/utils/helpers';

interface Props {
  color?: string;
  // checkColor?: string;
  size?: number;
  onPress?: () => void;
  checked?: boolean;
}

const CheckBox = ({ checked, onPress, size, color }: Props) => {
  const { primary, background } = useThemeColors();

  return (
    <Box>
      <TouchableOpacity
        activeOpacity={0.91}
        testID="checkbox"
        onPress={onPress}>
        <Box
          borderRadius={4}
          borderWidth={1}
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          style={{
            borderColor: color || primary,
            backgroundColor: checked
              ? addAlpha(color || primary, 0.1)
              : undefined,
            width: size || 14,
            height: size || 14,
          }}>
          {checked && (
            <Ionicons
              name={'checkmark'}
              size={(size || 14) * 0.8}
              color={color || background}
            />
          )}
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default CheckBox;
