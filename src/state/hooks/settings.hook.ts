import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectSettingsObject } from '../reducers/settings.reducer';

export const useSettings = () => {
  const settings = useSelector(selectSettingsObject);

  return useMemo(
    () => ({
      ...settings,
    }),
    [settings],
  );
};
