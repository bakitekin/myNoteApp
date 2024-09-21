import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/appColors';
import {screenWidth} from '../utils/contanst';

const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.light,
    padding: 10,
    margin: 5,
    gap: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
  },
  bubleContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 7,
  },
  buble: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: AppColors.gray,
    borderRadius: 100,
  },
  noteContainer: {
    flex: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.info,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
  },
  description: {fontSize: 14, color: AppColors.gray, marginVertical: 5},
  date: {fontSize: 12, color: AppColors.sky, marginVertical: 5},
  actionButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export {NoteCardStyle};
