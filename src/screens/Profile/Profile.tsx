import React, {FC} from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import globalStyles from '../../styles/global.styles';
import RoundGray from '../../components/RoundGray/RoundGray';
import {data} from '../../utils/data';
import styles from './profile.styles';
import {ProfileTabNavigation} from '../../config/Navigator';

const Profile: FC = () => {
  return (
    <SafeAreaView style={globalStyles.whiteBg}>
      <ScrollView contentContainerStyle={{width: '100%'}}>
        <View style={styles.imgContainer}>
          <RoundGray height={120} width={120} image={data[0]?.image} />
        </View>
        <Text style={styles.name}>Natasha M</Text>
        <View style={styles.postStats}>
          <View style={styles.singlePostStat}>
            <Text style={styles.boldTxt}>45</Text>
            <Text style={styles.noBoldTxt}>Following</Text>
          </View>
          <View style={styles.borderVertical} />
          <View style={styles.singlePostStat}>
            <Text style={styles.boldTxt}>30</Text>
            <Text style={styles.noBoldTxt}>Followers</Text>
          </View>
          <View style={styles.borderVertical} />
          <View style={styles.singlePostStat}>
            <Text style={styles.boldTxt}>100</Text>
            <Text style={styles.noBoldTxt}>Posts</Text>
          </View>
        </View>
        <View style={styles.borderHorizontal} />
        <View style={{height: '100%', backgroundColor: 'red'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
