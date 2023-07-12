import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import RoundGray from '../RoundGray/RoundGray';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

type PostsPropType = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  image: string;
  imageUser: string;
};

const UserPost: FC<PostsPropType> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <RoundGray height={48} width={48} image={props.imageUser} />
        <View style={styles.middle}>
          <Text style={styles.name}>
            {props.firstName} {props.lastName}
          </Text>
          <Text style={styles.location}>{props.location}</Text>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={25} />
        </Pressable>
      </View>
      <View style={styles.postImage}>
        <Image
          source={{uri: props.image}}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.singleBottomItem}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={styles.bottomText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={styles.singleBottomItem}>
          <FontAwesomeIcon icon={faComment} color={'#79869F'} />
          <Text style={styles.bottomText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={styles.singleBottomItem}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={styles.bottomText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(23),
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    paddingBottom: verticalScale(23),
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: horizontalScale(5),
  },
  middle: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: horizontalScale(10),
  },
  name: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    color: 'black',
  },
  location: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(12),
    fontWeight: '400',
  },
  postImage: {
    height: verticalScale(200),
    width: '100%',
    borderRadius: horizontalScale(15),
    backgroundColor: '#D9D9D9',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  bottom: {
    flexDirection: 'row',
    paddingLeft: horizontalScale(5),
  },
  singleBottomItem: {
    flexDirection: 'row',
    marginRight: horizontalScale(27),
    alignItems: 'center',
  },
  bottomText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    marginLeft: horizontalScale(6),
    color: '#79869F',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default UserPost;
