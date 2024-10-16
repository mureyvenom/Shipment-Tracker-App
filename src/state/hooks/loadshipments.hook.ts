import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { updateStatuses, updateShipments } from '../reducers/shipments.reducer';
import {
  useGetStatusListMutation,
  useGetShipmentListMutation,
} from '../services/frappe.service';

export const useLoadShipments = () => {
  const dispatch = useDispatch();
  const [getStatuses, { isLoading: statusesLoading }] =
    useGetStatusListMutation();
  const [getShipments, { isLoading: shipmentsLoading }] =
    useGetShipmentListMutation();

  const fetchStatuses = useCallback(async () => {
    try {
      const body = new FormData();
      body.append('doctype', 'AWB Status');
      body.append('fields', '["*"]');
      const response = await getStatuses({
        body,
      });
      //debug
      // console.log('response', JSON.stringify(response));
      if ((response as any)?.error) {
        const err = response as any;
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err?.error?.data?.message || 'Something went wrong',
        });
        return;
      }
      dispatch(
        updateStatuses({
          value: response?.data?.message || [],
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }, [getStatuses, dispatch]);

  const fetchShipments = useCallback(async () => {
    try {
      const body = new FormData();
      body.append('doctype', 'AWB Status');
      body.append('fields', '["*"]');
      const response = await getShipments({});
      //debug
      // console.log('response', JSON.stringify(response));
      if ((response as any)?.error) {
        const err = response as any;
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err?.error?.data?.message || 'Something went wrong',
        });
        return;
      }
      dispatch(
        updateShipments({
          value: response?.data?.message || [],
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }, [getShipments, dispatch]);

  return useMemo(
    () => ({
      loadShipments: fetchShipments,
      loadStatuses: fetchStatuses,
      shipmentsLoading,
      statusesLoading,
    }),
    [fetchStatuses, fetchShipments, shipmentsLoading, statusesLoading],
  );
};
