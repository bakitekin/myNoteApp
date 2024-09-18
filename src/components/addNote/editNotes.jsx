import React, {useState} from 'react';
import {View, SafeAreaView, TextInput, Text, Alert} from 'react-native';
import Button from '../../components/uı/button';
import AddNoteStyle from '../../styles/addNoteStyle';
import EditIcons from '../../components/addNote/editIcons';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../theme/appColors';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleSaveNote = () => {
    if (title === '' || description === '') {
      Alert.alert('Hata', 'Bütün alanları doldurunuz.');
      return;
    }
    const newNote = {
      id: Math.random().toString(), // unique id
      title,
      description,
      date: new Date().toLocaleString(),
    };

    // Navigate back to 'MyNotes' screen with the new note
    navigation.navigate('MyNotes', {newNote});
  };

  return (
    <SafeAreaView style={AddNoteStyle.addNotes}>
      <View style={AddNoteStyle.ıcons}>
        <EditIcons />
      </View>
      <View style={AddNoteStyle.input}>
        <TextInput
          placeholder="Lütfen notunuzu bu alana yazınız."
          value={title}
          onChangeText={setTitle}
          style={styles.title}
        />
        <TextInput
          placeholder="Lütfen notun açıklamasını bu alana yazınız."
          value={description}
          onChangeText={setDescription}
          style={styles.description}
        />
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            Last Modified: {new Date().toLocaleString()}
          </Text>
          <Text style={styles.date}>
            Created: {new Date().toLocaleString()}
          </Text>
        </View>
      </View>
      <View style={AddNoteStyle.botton}>
        <Button onPress={handleSaveNote} title={'Save Changes'} />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  title: {
    paddingVertical: 20,
    marginHorizontal: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    paddingVertical: 10,
    marginHorizontal: 5,
    fontSize: 13,
  },
  dateContainer: {
    marginHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingVertical: 10,
    gap: 5,
    marginTop: 10,
  },
  date: {
    fontSize: 12,
    color: AppColors.darkGray,
  },
};

export default AddNote;
