import {StyleSheet} from 'react-native';
import {AppColors} from '../../theme/appColors';
import {screenHeigth, screenWidth} from '../../utils/contanst';

const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: AppColors.lightGray,
    width: screenWidth,
    height: screenHeigth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headertext: {
    fontSize: 35,
    fontWeight: 'bold',
    color: AppColors.black,
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 0.9,
    alignItems: 'center',
    paddingTop: 10,
  },
  leftIcon: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 4,
  },
});

export default HeaderStyle;
