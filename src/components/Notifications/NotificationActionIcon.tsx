import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import {Pressable, StyleSheet, PressableProps} from 'react-native';
import React from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface NotificationActionIconProps extends PressableProps {
  icon: IconProp;
  size?: number;
  colour?: string;
}

export const NotificationActionIcon = ({
  icon,
  size,
  colour,
  ...rest
}: NotificationActionIconProps) => {
  return (
    <Pressable {...rest}>
      <FontAwesomeIcon
        icon={icon || faCheckCircle}
        size={size || 24}
        style={styles.icon}
        color={colour || 'blue'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
