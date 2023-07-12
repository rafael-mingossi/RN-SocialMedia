import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

interface NotificationActionsProps {
  children: ReactNode;
}

export const NotificationActions = ({children}: NotificationActionsProps) => {
  return <View style={styles.icons}>{children}</View>;
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
