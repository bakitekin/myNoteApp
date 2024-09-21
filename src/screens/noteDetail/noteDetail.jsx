import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import AddNoteStyle from '../../styles/addNoteStyle';
import {useRoute} from '@react-navigation/native';
import {AppColors} from '../../theme/appColors';

const NoteDetail = () => {
  const [note, setNote] = useState({});
  const route = useRoute();

  useEffect(() => {
    if (route.params?.item) {
      setNote(route.params.item);
    }
  }, [route.params?.item]);

  return (
    <SafeAreaView style={AddNoteStyle.addNotes}>
      <ScrollView contentContainerStyle={AddNoteStyle.input}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.description}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            Last Modified: {note.updatedAt || note.createdAt}
          </Text>
          <Text style={styles.date}>Created: {note.createdAt}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  dateContainer: {
    marginHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingVertical: 10,
    gap: 5,
    marginTop: 10,
    borderColor: AppColors.light,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: AppColors.lightGray,
    shadowColor: AppColors.darkGray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    paddingVertical: 20,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: AppColors.light,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    borderColor: AppColors.light,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 100,
    paddingVertical: 50,
    paddingHorizontal: 10,
    margin: 5,
  },
  date: {
    fontSize: 12,
    color: AppColors.darkGray,
  },
};

export default NoteDetail;
