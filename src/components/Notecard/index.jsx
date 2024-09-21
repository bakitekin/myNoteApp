// Import necessary libraries
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {NoteCardStyle} from '../../styles/noteCartStyle';
import {AppColors} from '../../theme/appColors';
import {Edit2, Trash} from 'iconsax-react-native';
import {NOTEDETAIL} from '../../utils/routes';
import EditNote from '../../screens/editNote';

// Create NoteCard component
const NoteCard = ({item, onDelete}) => {
  const navigation = useNavigation();
  const {id, title, description, createdAt, updatedAt} = item;

  const handleDeleteNote = () => {
    onDelete(id);
  };

  const handleEditNote = () => {
    navigation.navigate(EditNote, {noteToEdit: item});
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {item})}
      style={NoteCardStyle.container}>
      <View style={NoteCardStyle.bubleContainer}>
        <View style={NoteCardStyle.buble} />
      </View>

      <View style={NoteCardStyle.noteContainer}>
        <Text style={NoteCardStyle.title}>{title}</Text>
        <Text
          style={NoteCardStyle.description}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </Text>

        <Text style={NoteCardStyle.date}>
          {updatedAt ? `Updated: ${updatedAt}` : `Created: ${createdAt}`}
        </Text>
      </View>

      <View style={NoteCardStyle.actionButtonContainer}>
        <TouchableOpacity
          onPress={handleEditNote}
          style={NoteCardStyle.actionButton}>
          <Edit2 size="24" color={AppColors.success} variant="Bold" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeleteNote}
          style={NoteCardStyle.actionButton}>
          <Trash size="24" color={AppColors.error} variant="Bold" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
