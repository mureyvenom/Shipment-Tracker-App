import { Theme } from '@/utils/theme';
import { BoxProps, ColorProps } from '@shopify/restyle';
import React, { useState, forwardRef } from 'react';
import { Platform, StyleProp, TextInput, TextStyle } from 'react-native';
import Box from './Box';
import Text from './Text';
import { useThemeColors, useThemeTextVariants } from '@/hooks/useTheme';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';

interface Props extends FloatingLabelProps {
  label: string;
  containerProps?: BoxProps<Theme>;
  error?: string;
  badge?: string;
  disabled?: boolean;
  noPadding?: boolean;
  noMargin?: boolean;
  textArea?: boolean;
  borderColor?: ColorProps<Theme>['color'];
  subtext?: string;
  backgroundColor?: string;
  inputStyle?: StyleProp<TextStyle>;
  height?: number;
  borderWidth?: number;
  borderRadius?: number;
}

const FloatingInput = forwardRef<TextInput, Props>((elementProps, ref) => {
  const {
    label,
    containerProps,
    error,
    borderColor,
    disabled,
    subtext,
    noMargin,
    inputStyle,
    textArea,
    ...props
  } = elementProps;
  const { placeholder, primary, danger, faded_primary } = useThemeColors();
  const { inter_regular } = useThemeTextVariants();
  const [focused, setFocused] = useState(false);

  return (
    <Box marginBottom={!noMargin ? 'm' : undefined} {...containerProps}>
      <FloatingLabelInput
        label={label || ''}
        pointerEvents={disabled ? 'none' : undefined}
        testID="input"
        placeholderTextColor={placeholder}
        // editable={!disabled || undefined}
        // focusable={!disabled || undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        multiline={textArea}
        ref={ref}
        isFocused={focused}
        selectTextOnFocus={false}
        containerStyles={{
          borderWidth: 1,
          borderRadius: 6,
          borderColor: borderColor
            ? borderColor
            : error
            ? danger
            : focused
            ? primary
            : faded_primary,
          backgroundColor: faded_primary,
          height: 56,
          paddingHorizontal: 14,
        }}
        hintTextColor={primary}
        labelStyles={{
          fontSize: 16,
          fontFamily: inter_regular.fontFamily,
        }}
        customLabelStyles={{
          fontSizeBlurred: 16,
        }}
        showPasswordImageStyles={{
          tintColor: primary,
        }}
        inputStyles={{
          fontFamily: inter_regular.fontFamily,
          color: primary,
          fontSize: 16,
          marginTop: Platform.OS === 'android' ? 4 + 7 : 7,
          ...(inputStyle || ({} as any)),
        }}
        style={{
          fontSize: 16,
        }}
        {...props}
      />
      {(error || subtext) && (
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop="xs"
          justifyContent="space-between">
          <Box>
            {error && (
              <Text variant="medium" fontSize={10} color="danger">
                {error}
              </Text>
            )}
          </Box>
          <Box>
            <Text variant="bold" fontSize={10}>
              {subtext}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
});

export default FloatingInput;
