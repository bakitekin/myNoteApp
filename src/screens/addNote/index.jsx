import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, TextInput, Text, Alert} from 'react-native';
import Button from '../../components/ui/button';
import AddNoteStyle from '../../styles/addNoteStyle';
import EditButton from '../../components/addNote/EditButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AppColors} from '../../theme/appColors';
import {MYNOTES} from '../../utils/routes';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [lastModifiedDate, setLastModifiedDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [titleStyle, setTitleStyle] = useState({});
  const [descriptionStyle, setDescriptionStyle] = useState({});

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.noteToEdit) {
      const {
        title: editTitle,
        description: editDescription,
        createdAt,
        updatedAt,
      } = route.params.noteToEdit;
      setTitle(editTitle);
      setDescription(editDescription);
      setCreatedDate(createdAt);
      setLastModifiedDate(updatedAt || createdAt);
      setIsEditing(true);
    }
  }, [route.params?.noteToEdit]);

  const handleSaveNote = () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const currentDate = new Date().toLocaleString();
    const newNote = {
      id: route.params?.noteToEdit?.id || Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      createdAt: route.params?.noteToEdit?.createdAt || currentDate,
      updatedAt: isEditing ? currentDate : '',
    };

    navigation.navigate(MYNOTES, {newNote});
  };

  const handleStyleChange = (styleType, field) => {
    const styleFunction =
      field === 'title' ? setTitleStyle : setDescriptionStyle;

    const newStyle = {
      fontWeight: styleType === 'bold' ? 'bold' : undefined,
      fontStyle: styleType === 'italic' ? 'italic' : undefined,
      textDecorationLine: styleType === 'underline' ? 'underline' : undefined,
      textAlign:
        styleType === 'align-left'
          ? 'left'
          : styleType === 'align-right'
          ? 'right'
          : styleType === 'align-center'
          ? 'center'
          : undefined,
    };

    styleFunction(prevStyle => ({
      ...prevStyle,
      ...newStyle,
    }));
  };

  return (
    <SafeAreaView style={AddNoteStyle.addNotes}>
      <View style={AddNoteStyle.icons}>
        <EditButton
          isEditing={isEditing}
          onStyleChange={styleType => handleStyleChange(styleType, 'title')}
        />
      </View>
      <View style={AddNoteStyle.input}>
        <TextInput
          placeholder={isEditing ? 'Edit title' : 'Add title'}
          value={title}
          onChangeText={setTitle}
          style={[styles.title, titleStyle]}
        />
        <TextInput
          placeholder={isEditing ? 'Edit description' : 'Add description'}
          value={description}
          onChangeText={setDescription}
          style={[styles.description, descriptionStyle]}
          multiline
        />
        {isEditing && (
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Last Modified: {lastModifiedDate}</Text>
            <Text style={styles.date}>Created: {createdDate}</Text>
          </View>
        )}
      </View>
      <View style={AddNoteStyle.button}>
        <Button
          onPress={handleSaveNote}
          title={isEditing ? 'Update Note' : 'Save Note'}
        />
      </View>
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
    shadowOffset: {width: 0, height: 2},
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

export default AddNote;
