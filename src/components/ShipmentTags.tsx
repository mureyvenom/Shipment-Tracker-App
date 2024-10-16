import {} from 'react-native';
import React from 'react';
import Box from './Box';
import Text from './Text';
import { useThemeColors } from '@/hooks/useTheme';
import { addAlpha } from '@/utils/helpers';

interface DynamicTagProp {
  name: string;
  color: string;
}

interface Props {
  type: 'received' | 'error' | 'delivered' | 'cancelled' | 'on hold';
}

const ShipmentTags = (props: Props | DynamicTagProp) => {
  const {
    danger,
    warning,
    success,
    faded_danger,
    faded_warning,
    faded_success,
    faded_primary,
    filter_text,
  } = useThemeColors();

  const type = (props as any)?.type || '';
  const dynamic = props as DynamicTagProp;

  return (
    <Box
      minHeight={23}
      paddingVertical="xs"
      borderWidth={1}
      style={{
        paddingHorizontal: 6,
        backgroundColor: !type
          ? addAlpha(dynamic.color, 0.1)
          : type === 'received'
          ? 'D9E6FD'
          : type === 'error'
          ? faded_danger
          : type === 'delivered'
          ? faded_success
          : type === 'on hold'
          ? faded_warning
          : faded_primary,
      }}
      justifyContent="center"
      borderColor="white"
      borderRadius={4}>
      <Text
        textTransform="uppercase"
        fontSize={11}
        style={{
          color: !type
            ? dynamic.color
            : type === 'received'
            ? '2F50C1'
            : type === 'error'
            ? danger
            : type === 'delivered'
            ? success
            : type === 'on hold'
            ? warning
            : filter_text,
        }}>
        {type || dynamic?.name}
      </Text>
    </Box>
  );
};

export default ShipmentTags;
