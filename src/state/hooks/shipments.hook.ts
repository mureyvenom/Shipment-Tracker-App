import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectShipmentObject } from '../reducers/shipments.reducer';

export const useShipments = () => {
  const shipemtns = useSelector(selectShipmentObject);

  return useMemo(
    () => ({
      ...shipemtns,
    }),
    [shipemtns],
  );
};
