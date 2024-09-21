import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/router/header';
import ScreenStyle from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNOTES} from '../../utils/routes';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/Notecard';

const MyNotes = ({navigation, route}) => {
  const [notes, setNotes] = useState(mockData);

  // route parametrelerini dinleyerek eğer yeni bir not eklenmişse notlar listesine ekle
  useEffect(() => {
    const {params} = route;
    if (params && params.newNote) {
      addNote(params.newNote); // yeni not varsa addNote fonksiyonunu çağır
    }
  }, [route]); // route değiştiğinde bu effect çalışacak

  const addNote = newNote => {
    // mevcut notlar listesini kopyalayıp yeni notu ekliyoruz
    setNotes(prevNotes => [...prevNotes, {...newNote, id: Date.now()}]);
  };

  const handleDeleteNote = id => {
    // belirtilen id'ye sahip notu silmek için notlar listesini filtreliyoruz
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const handleEditNote = editedNote => {
    // notlar listesini düzenlenen nota göre güncelliyoruz, updatedAt alanını da güncelliyoruz
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === editedNote.id
          ? {...note, ...editedNote, updatedAt: new Date().toLocaleString()} // güncelleme tarihini de ekliyoruz
          : note,
      ),
    );
  };
  return (
    <SafeAreaView style={ScreenStyle.container}>
      <View style={ScreenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              onDelete={handleDeleteNote}
              onEdit={handleEditNote}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
        <FloatActionButton onPress={() => navigation.navigate(ADDNOTES)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
