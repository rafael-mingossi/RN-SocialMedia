import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  header: {
    paddingTop: verticalScale(10),
    paddingRight: horizontalScale(26),
    paddingLeft: horizontalScale(17),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: '#F9FAFB',
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
  },
  counter: {
    position: 'absolute',
    right: horizontalScale(7),
    top: verticalScale(10),
    width: horizontalScale(11),
    height: verticalScale(10),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterTxt: {
    fontSize: scaleFontSize(8),
    fontFamily: 'Inter',
    lineHeight: verticalScale(7),
    fontWeight: '600',
    color: '#ffffff',
  },
  userStory: {
    paddingHorizontal: horizontalScale(17),
    marginTop: verticalScale(12),
    height: verticalScale(100),
  },
  userPostContainer: {
    marginTop: verticalScale(30),
    paddingHorizontal: horizontalScale(24),
    flex: 1,
  },
});

export default styles;
