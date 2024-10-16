import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Box from '@/components/Box';
import ScaledImage from '@/components/ScaledImage';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useThemeColors, useThemeTextVariants } from '@/hooks/useTheme';
import Text from '@/components/Text';
import OptionButton from '@/components/OptionButton';
import CheckBox from '@/components/CheckBox';
import { ActionSheetRef } from 'react-native-actions-sheet';
import BottomSheet from '@/components/BottomSheet';
import { useAuth } from '@/state/hooks/user.hook';
import ShipmentItem from '@/components/ShipmentItem';
import { useShipments } from '@/state/hooks/shipments.hook';
import { useLoadShipments } from '@/state/hooks/loadshipments.hook';

const ShipmentsScreen = () => {
  const { primary, placeholder, filter_text, white } = useThemeColors();
  const { inter_regular } = useThemeTextVariants();
  const [marked, setMarked] = useState(false);
  const actionRef = useRef<ActionSheetRef>(null);
  const [search, setSearch] = useState('');
  const [selectedShipments, setSelectedShipments] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const { user } = useAuth();
  const { statuses, shipments } = useShipments();
  const { loadShipments, loadStatuses, statusesLoading, shipmentsLoading } =
    useLoadShipments();

  const filteredShipments = useMemo(
    () =>
      search.length > 0 || appliedFilters.length > 0
        ? shipments.filter(
            s =>
              appliedFilters.includes(s.status) &&
              s.name.toLowerCase().includes(search.toLowerCase()),
          )
        : shipments,
    [shipments, search, appliedFilters],
  );

  const handleMarkAll = useCallback(() => {
    if (shipments.length === selectedShipments.length) {
      setSelectedShipments([]);
      return;
    }
    if (marked) {
      setSelectedShipments([]);
    }
    setMarked(!marked);
  }, [marked, shipments, selectedShipments]);

  useEffect(() => {
    loadStatuses();
    loadShipments();
  }, [loadShipments, loadStatuses]);

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1}>
          <BottomSheet ref={actionRef}>
            <Box
              paddingTop="l"
              paddingBottom="mid"
              borderBottomWidth={1}
              borderBottomColor="disabled_button"
              paddingHorizontal="l"
              flexDirection="row"
              marginBottom="mid"
              alignItems="center"
              justifyContent="space-between">
              <TouchableOpacity
                onPress={() => {
                  setSelectedStatuses(appliedFilters);
                  actionRef.current?.hide();
                }}>
                <Text variant="inter_medium" color="primary" fontSize={16}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text fontSize={18} variant="inter_semibold">
                Filter
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setAppliedFilters(selectedStatuses);
                  actionRef.current?.hide();
                }}>
                <Text variant="inter_medium" color="primary" fontSize={16}>
                  Done
                </Text>
              </TouchableOpacity>
            </Box>
            <Box marginBottom="xl" paddingHorizontal="l">
              <Text color="filter_text">SHIPMENT STATUS</Text>
              <Box
                paddingBottom="l"
                flexDirection="row"
                style={{ gap: 10 }}
                flexWrap="wrap"
                marginTop="m">
                {statuses.map(s => (
                  <Box key={s.name}>
                    <TouchableOpacity
                      onPress={() => {
                        if (selectedStatuses.includes(s.name)) {
                          setSelectedStatuses(
                            selectedStatuses.filter(ss => ss !== s.name),
                          );
                        } else {
                          setSelectedStatuses([...selectedStatuses, s.name]);
                        }
                      }}>
                      <Box
                        height={40}
                        borderWidth={1}
                        borderColor={
                          selectedStatuses.includes(s.name)
                            ? 'primary'
                            : 'faded_primary'
                        }
                        justifyContent="center"
                        paddingHorizontal="mid"
                        shadowRadius={10}
                        borderRadius={10}
                        backgroundColor="faded_primary">
                        <Text
                          variant="inter_regular"
                          fontSize={16}
                          color={
                            selectedStatuses.includes(s.name)
                              ? 'primary'
                              : 'filter_text'
                          }>
                          {s.name}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  </Box>
                ))}
              </Box>
            </Box>
          </BottomSheet>
          <Box>
            <Box
              padding="l"
              marginBottom="mid"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Box width={40}>
                <Box height={40} width={40} borderRadius={40} overflow="hidden">
                  <ScaledImage
                    height={40}
                    source={require('@/assets/images/avatar.png')}
                  />
                </Box>
              </Box>
              <Box flex={1} alignItems="center">
                <ScaledImage
                  source={require('@/assets/images/logo-purp.png')}
                  height={17}
                />
              </Box>
              <Box width={40}>
                <TouchableOpacity>
                  <Box
                    height={40}
                    width={40}
                    backgroundColor="faded_primary"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius={40}
                    overflow="hidden">
                    <Feather name="bell" size={24} color={primary} />
                  </Box>
                </TouchableOpacity>
              </Box>
            </Box>
            <Box paddingHorizontal="m" gap="mid">
              <Text variant="inter_regular" opacity={0.6}>
                Hello,
              </Text>
              <Text variant="semibold" fontSize={28}>
                {user?.full_name}
              </Text>
            </Box>
            <Box paddingHorizontal="m" marginTop="l" marginBottom="l">
              <Box
                flexDirection="row"
                gap="s"
                paddingHorizontal="mid"
                alignItems="center"
                height={44}
                borderRadius={10}
                backgroundColor="faded_primary">
                <Feather
                  name="search"
                  size={24}
                  color={search.length > 0 ? '#6E91EC' : placeholder}
                />
                <TextInput
                  style={{
                    flex: 1,
                    height: '100%',
                    fontSize: 16,
                    fontFamily: inter_regular.fontFamily,
                    color: primary,
                  }}
                  placeholder="Search"
                  placeholderTextColor={placeholder}
                  value={search}
                  onChangeText={setSearch}
                />
                {search.length > 0 && (
                  <TouchableOpacity
                    onPress={() => {
                      setSearch('');
                    }}>
                    <Box>
                      <Feather name="x" size={24} color={primary} />
                    </Box>
                  </TouchableOpacity>
                )}
              </Box>
            </Box>
            {statusesLoading && (
              <Box padding="l" alignItems="center">
                <ActivityIndicator color={primary} size="small" />
              </Box>
            )}
            <Box
              flexDirection="row"
              gap="mid"
              paddingHorizontal="m"
              marginBottom="l">
              <Box flex={1}>
                <OptionButton
                  onPress={() => {
                    actionRef.current?.show();
                  }}
                  displayText="Filters"
                  buttonProps={{
                    backgroundColor: 'faded_primary',
                    borderColor: 'faded_primary',
                  }}
                  textProps={{
                    color: 'filter_text',
                  }}>
                  <Ionicons
                    name="filter"
                    size={24}
                    color={filter_text}
                    style={{ marginRight: 8 }}
                  />
                </OptionButton>
              </Box>
              <Box flex={1}>
                <OptionButton displayText="Add Scan">
                  <MaterialCommunityIcons
                    name="line-scan"
                    size={24}
                    color={white}
                    style={{ marginRight: 8 }}
                  />
                </OptionButton>
              </Box>
            </Box>
            <Box
              marginBottom="m"
              paddingHorizontal="m"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between">
              <Box>
                <Text fontSize={22} variant="semibold">
                  Shipments
                </Text>
              </Box>
              <Box>
                <TouchableOpacity onPress={handleMarkAll}>
                  <Box flexDirection="row" alignItems="center" gap="s">
                    <CheckBox
                      checked={
                        marked || selectedShipments.length === shipments.length
                      }
                      onPress={handleMarkAll}
                      color={primary}
                      size={20}
                    />
                    <Text fontSize={18} color="primary">
                      Mark All
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </Box>
            {shipmentsLoading && (
              <Box padding="l" alignItems="center">
                <ActivityIndicator color={primary} size="small" />
              </Box>
            )}
          </Box>
          <Box
            flex={1}
            paddingHorizontal="m"
            onStartShouldSetResponder={() => true}>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={statusesLoading || shipmentsLoading}
                  onRefresh={() => {
                    loadStatuses();
                    loadShipments();
                  }}
                />
              }
              contentContainerStyle={{
                gap: 8,
                paddingBottom: 20,
              }}
              removeClippedSubviews
              data={filteredShipments}
              keyExtractor={({ name }) => name}
              renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={1}>
                  <ShipmentItem
                    item={item}
                    marked={marked || selectedShipments.includes(item.name)}
                    onMark={() => {
                      if (marked) {
                        setSelectedShipments(
                          [...shipments]
                            .filter(s => s.name !== item.name)
                            .map(s => s.name),
                        );
                        setMarked(false);
                      } else {
                        if (selectedShipments.includes(item.name)) {
                          setSelectedShipments(
                            selectedShipments.filter(s => s !== item.name),
                          );
                        } else {
                          setSelectedShipments([
                            ...selectedShipments,
                            item.name,
                          ]);
                        }
                      }
                    }}
                  />
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                <Box
                  paddingVertical="xxl"
                  paddingHorizontal="l"
                  alignItems="center">
                  <Text>No shipments available</Text>
                </Box>
              }
            />
          </Box>
        </Box>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ShipmentsScreen;
