import { Theme } from '@/utils/theme';
import { BoxProps, TextProps, useTheme } from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { Circle } from 'react-native-animated-spinkit';
import Box from './Box';
import Text from './Text';

interface Props {
  containerProps?: BoxProps<Theme>;
  onPress?: () => void;
  buttonProps?: BoxProps<Theme>;
  displayText?: string;
  children?: ReactNode;
  loading?: boolean;
  style?: ViewStyle;
  textProps?: TextProps<Theme>;
  disabled?: boolean;
  testID?: string;
}

const Button = ({
  containerProps,
  onPress,
  buttonProps,
  displayText,
  children,
  loading,
  style,
  textProps,
  disabled,
  testID,
}: Props) => {
  const theme = useTheme<Theme>();

  return (
    <Box width="100%" {...containerProps}>
      <TouchableOpacity
        activeOpacity={0.91}
        testID={testID || 'app-button'}
        disabled={disabled || loading}
        onPress={onPress}>
        <Box
          height={56}
          // opacity={disabled ? 0.7 : undefined}
          backgroundColor={disabled ? 'disabled_button' : 'primary'}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          borderRadius={10}
          borderWidth={1}
          borderColor={disabled ? 'disabled_button' : 'primary'}
          {...buttonProps}
          style={{ ...style }}>
          {loading ? (
            <Circle
              color={theme.colors[textProps?.color || 'white']}
              size={17}
            />
          ) : (
            <>
              {children}
              <Text
                color={disabled ? 'placeholder' : 'white'}
                variant="bold"
                fontSize={17}
                {...textProps}>
                {displayText}
              </Text>
            </>
          )}
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default Button;
