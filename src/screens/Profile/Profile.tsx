import React, {FC} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import globalStyles from '../../styles/global.styles';
import RoundGray from '../../components/RoundGray/RoundGray';
import {data} from '../../utils/data';

const Profile: FC = () => {
  return (
    <SafeAreaView style={globalStyles.whiteBg}>
      <View style={styles.imgContainer}>
        <RoundGray height={120} width={120} image={data[0]?.image} />
      </View>
      <Text style={styles.name}>Natasha M</Text>
      <View style={styles.postStats}>
        <View style={styles.singlePostStat}>
          <Text style={styles.boldTxt}>45</Text>
          <Text style={styles.noBoldTxt}>Following</Text>
        </View>
        <View style={styles.singlePostStat}>
          <Text style={styles.boldTxt}>30</Text>
          <Text style={styles.noBoldTxt}>Followers</Text>
        </View>
        <View style={styles.singlePostStat}>
          <Text style={styles.boldTxt}>100</Text>
          <Text style={styles.noBoldTxt}>Posts</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    width: 127,
    marginTop: 50,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter',
    marginTop: 20,
    fontWeight: '600',
    fontSize: 20,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  singlePostStat: {
    alignItems: 'center',
  },
  boldTxt: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
  },
  noBoldTxt: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default Profile;
