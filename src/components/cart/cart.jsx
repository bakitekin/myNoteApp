import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import {Edit2, Trash} from 'iconsax-react-native';
import {AppColors} from '../../theme/appColors';
import {NoteCardStyle} from '../../styles/noteCartStyle';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ADDNOTES} from '../../utils/routes';

const Cart = () => {
  const [notes, setNotes] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const {newNote} = route.params || {};

  useEffect(() => {
    if (newNote) {
      const isNoteExists = notes.some(note => note.id === newNote.id);
      if (!isNoteExists) {
        setNotes(prevNotes => [...prevNotes, newNote]);
      }
    }
  }, [newNote, notes]);

  const handleDeleteNote = id => {
    Alert.alert('Notu Sil', 'Bu notu silmek istediğinizden emin misiniz?', [
      {text: 'İptal', style: 'cancel'},
      {
        text: 'Sil',
        style: 'destructive',
        onPress: () => {
          setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        },
      },
    ]);
  };

  const handleEditNote = note => {
    navigation.navigate(ADDNOTES, {note});
  };

  return (
    <FlatList
      data={notes}
      keyExtractor={item => item.id.toString()}
      renderItem={({
        item: {id, title, description, dateCreated, dateModified},
      }) => (
        <TouchableOpacity style={NoteCardStyle.container}>
          <View style={NoteCardStyle.bubleContainer}>
            <View style={NoteCardStyle.buble} />
          </View>
          <View style={NoteCardStyle.noteContainer}>
            <Text style={NoteCardStyle.title}>{title}</Text>
            <Text style={NoteCardStyle.description}>{description}</Text>
            <Text style={NoteCardStyle.date}>
              Oluşturulma Tarihi: {dateCreated}
            </Text>
            <Text style={NoteCardStyle.date}>
              Düzenleme Tarihi: {dateModified}
            </Text>
          </View>
          <View style={NoteCardStyle.trashButtonContainer}>
            <TouchableOpacity onPress={() => handleDeleteNote(id)}>
              <Trash size="24" color={AppColors.error} variant="Bold" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleEditNote({id, title, description})}>
              <Edit2 size="24" color={AppColors.success} variant="Bold" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Cart;
