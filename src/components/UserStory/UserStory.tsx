import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RoundGray from '../RoundGray/RoundGray';

type PropsType = {
  name: string;
  image: string;
};

const UserStory: FC<PropsType> = props => {
  return (
    <View style={styles.userStoryContainer}>
      <RoundGray height={63} width={63} image={props.image} />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userStoryContainer: {
    alignItems: 'center',
    marginRight: 17,
  },
  name: {
    fontFamily: 'Inter',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 17,
    marginTop: 8,
    fontSize: 14,
  },
});

export default UserStory;
