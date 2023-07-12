import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {horizontalScale} from '../../utils/scalling';

type DetailsType = {
  height: number;
  width: number;
  image?: string;
};

const RoundGray: FC<DetailsType> = ({height, width, image}) => {
  return (
    <View style={styles.border}>
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            height: height ? height : 65,
            width: width ? width : 65,
            overflow: 'hidden',
          },
          styles.grayArea,
        ]}>
        <Image
          source={{uri: image}}
          style={{height: '100%', width: '100%'}}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: '#022150',
    borderWidth: 1,
    padding: horizontalScale(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: horizontalScale(100),
  },
  grayArea: {
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
  },
});

export default RoundGray;
