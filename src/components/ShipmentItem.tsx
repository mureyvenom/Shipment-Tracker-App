import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Shipment } from '@/utils/types';
import Text from './Text';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from './Box';
import CheckBox from './CheckBox';
import ScaledImage from './ScaledImage';
import ShipmentTags from './ShipmentTags';
import { useThemeColors } from '@/hooks/useTheme';
import { useShipments } from '@/state/hooks/shipments.hook';
import { truncate } from 'lodash';

interface Props {
  item: Shipment;
  marked?: boolean;
  onMark?: () => void;
}

const ShipmentItem = ({ item, marked, onMark }: Props) => {
  const { primary } = useThemeColors();
  const { statuses } = useShipments();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="faded_primary"
      padding="mid"
      borderRadius={10}
      justifyContent="space-between">
      <Box>
        <CheckBox onPress={onMark} size={20} color={primary} checked={marked} />
      </Box>
      <Box>
        <ScaledImage
          source={require('@/assets/images/shipment-box.png')}
          height={40}
        />
      </Box>
      <Box>
        <Text variant="inter_regular" fontSize={13} color="shipment_text">
          AWB
        </Text>
        <Text variant="inter_semibold" fontSize={18}>
          {item.name}
        </Text>
        <Box flexDirection="row" alignItems="center" gap="s">
          <Text color="filter_text" variant="inter_regular" fontSize={13}>
            {item.origin_state}
          </Text>
          <Feather name="arrow-right" size={10} color={primary} />
          <Text color="filter_text" variant="inter_regular" fontSize={13}>
            {item.destination_state}
          </Text>
        </Box>
      </Box>
      <Box>
        <ShipmentTags
          color={statuses.find(s => s.name === item.status)?.color || '#000000'}
          name={truncate(item.status, {
            omission: '...',
            length: 10,
          })}
        />
      </Box>
      <Box>
        <TouchableOpacity>
          <Box
            height={24}
            width={24}
            backgroundColor="white"
            borderRadius={24}
            justifyContent="center"
            alignItems="center">
            <MaterialCommunityIcons
              name="arrow-expand"
              color={primary}
              size={16}
            />
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default ShipmentItem;
