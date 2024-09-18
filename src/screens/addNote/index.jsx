import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TextInput, Text, Alert} from 'react-native';
import Button from '../../components/uı/button';
import AddNoteStyle from '../../styles/addNoteStyle';
import EditIcons from '../../components/addNote/editIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppColors} from '../../theme/appColors';
import MyNotes from '../myNotes';
import {MYNOTES} from '../../utils/routes';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
  const route = useRoute(); // route kullanarak parametreleri alıyoruz

  useEffect(() => {
    // Eğer düzenlenecek bir not varsa, parametrelerden al ve formu doldur
    if (route.params?.noteToEdit) {
      const {title, description} = route.params.noteToEdit;
      setTitle(title);
      setDescription(description);
    }
  }, [route.params?.noteToEdit]);

  const handleSaveNote = () => {
    if (title === '' || description === '') {
      Alert.alert('Hata', 'Bütün alanları doldurunuz.');
      return;
    }

    const newNote = {
      id: route.params?.noteToEdit?.id || Math.random().toString(), // Eğer düzenliyorsak eski id'yi kullan
      title,
      description,
      date: new Date().toLocaleString(),
    };

    navigation.navigate(MYNOTES, {newNote});
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

// define your styles
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
