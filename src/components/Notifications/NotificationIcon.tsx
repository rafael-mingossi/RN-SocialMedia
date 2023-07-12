import {faAddressCard} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface NotificationIconProps {
  icon?: IconProp;
}

export const NotificationIcon = ({icon}: NotificationIconProps) => {
  return (
    <FontAwesomeIcon icon={icon || faAddressCard} size={25} color={'green'} />
  );
};
