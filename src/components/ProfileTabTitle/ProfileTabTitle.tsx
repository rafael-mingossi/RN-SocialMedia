import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {scaleFontSize} from '../../utils/scalling';

interface ProfileTabTitleProps {
  title: string;
  isFocused: boolean;
}

const ProfileTabTitle: FC<ProfileTabTitleProps> = props => {
  return (
    <Text
      style={[
        styles.text,
        {
          color: props.isFocused ? '#022150' : '#79869F',
          fontWeight: props.isFocused ? '500' : '400',
        },
      ]}>
      {props.title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    lineHeight: scaleFontSize(19),
    fontSize: scaleFontSize(16),
  },
});

export default ProfileTabTitle;
