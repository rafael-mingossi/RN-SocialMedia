import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface NotificationRootProps {
  children: ReactNode;
}

export const NotificationRoot = ({children}: NotificationRootProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 100,
    marginVertical: 10,
  },
});
