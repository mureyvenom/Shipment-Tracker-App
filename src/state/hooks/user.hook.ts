import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthObject } from '../reducers/user.reducer';

export const useAuth = () => {
  const auth = useSelector(selectAuthObject);

  return useMemo(
    () => ({
      ...auth,
    }),
    [auth],
  );
};
