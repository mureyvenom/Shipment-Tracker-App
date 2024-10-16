import {} from 'react-native';
import React, { forwardRef, ReactNode } from 'react';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

interface Props {
  children: ReactNode;
}

const BottomSheet = forwardRef<ActionSheetRef, Props>((elementProps, ref) => {
  const { children } = elementProps;
  return (
    <ActionSheet
      animated
      gestureEnabled
      useBottomSafeAreaPadding
      ref={ref}
      containerStyle={{
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}>
      {children}
    </ActionSheet>
  );
});

export default BottomSheet;
