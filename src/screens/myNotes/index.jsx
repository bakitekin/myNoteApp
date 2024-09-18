import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/router/header';
import {AppColors} from '../../theme/appColors';
import ScreenStyle from '../../styles/screenStyle';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ADDNOTES} from '../../utils/routes';
import Cart from '../../components/cart/cart';

const MyNotes = ({navigation, route}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (route.params?.newNote) {
      const newNote = route.params.newNote;
      const isNoteExists = notes.some(note => note.id === newNote.id);
      if (!isNoteExists) {
        setNotes(prevNotes => [...prevNotes, newNote]);
      }
    }
  }, [route.params?.newNote]);

  return (
    <SafeAreaView style={ScreenStyle.container}>
      <View style={styles.container}>
        <Header />
        <FlatList
          data={notes}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Cart note={item} />}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTES)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.lightGray,
  },
});

export default MyNotes;
