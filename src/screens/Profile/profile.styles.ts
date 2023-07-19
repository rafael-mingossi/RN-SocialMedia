import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: horizontalScale(50),
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter',
    marginTop: verticalScale(20),
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    textAlign: 'center',
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: verticalScale(30),
  },
  singlePostStat: {
    alignItems: 'center',
  },
  boldTxt: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(20),
    marginBottom: verticalScale(6),
  },
  noBoldTxt: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: '#79869F',
  },
  borderVertical: {
    borderLeftWidth: 1,
    height: verticalScale(30),
    borderColor: '#E9EFF1',
  },
  borderHorizontal: {
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(30),
  },
});

export default styles;
