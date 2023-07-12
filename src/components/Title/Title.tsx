import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import {scaleFontSize, verticalScale} from '../../utils/scalling';

type PropsType = {
  children: ReactNode;
};

const Title: FC<PropsType> = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(24),
    lineHeight: verticalScale(29),
  },
});

export default Title;
