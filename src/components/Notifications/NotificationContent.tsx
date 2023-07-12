import {StyleSheet, Text} from 'react-native';
import React from 'react';

interface NotificationContentProps {
  text: string;
}

export const NotificationContent = ({text}: NotificationContentProps) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    width: '40%',
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});
