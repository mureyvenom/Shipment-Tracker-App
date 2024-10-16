import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Shipment, ShipmentStatus } from '@/utils/types';

type StateType = {
  shipments: Shipment[];
  statuses: ShipmentStatus[];
};

const slice = createSlice({
  name: 'settings',
  initialState: {
    shipments: [],
    statuses: [],
  } as StateType,
  reducers: {
    updateShipments: (
      state,
      { payload: { value } }: PayloadAction<{ value: typeof state.shipments }>,
    ) => {
      state.shipments = value;
    },
    updateStatuses: (
      state,
      { payload: { value } }: PayloadAction<{ value: typeof state.statuses }>,
    ) => {
      state.statuses = value;
    },
  },
});

export const { updateShipments, updateStatuses } = slice.actions;

export default slice.reducer;

export const selectShipmentObject = (state: RootState) => state.shipments;
