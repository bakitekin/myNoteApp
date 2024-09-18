import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/appColors';

const AddNoteStyle = StyleSheet.create({
  addNotes: {
    flex: 1,
    backgroundColor: AppColors.white,
    padding: 10,
  },
  ıcons: {
    flex: 1,
    margin: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: AppColors.lightGray,
    borderRadius: 5,
  },
  input: {
    flex: 8,
    padding: 10,
    paddingHorizontal: 5,
  },
  botton: {
    flex: 1,
  },
});

export default AddNoteStyle;
