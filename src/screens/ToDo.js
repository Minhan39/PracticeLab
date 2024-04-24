import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Appbar, useTheme, Icon, TextInput, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ToDo = () => {
  const theme = useTheme();
  const [todo, setTodo] = React.useState('');
  const [data, setData] = React.useState([]);

  const onPress = () => {
    firestore()
      .collection('Todos')
      .add({
        completed: false,
        name: todo,
      })
      .then(() => {
        console.log('Todo added!');
      });
  };

  const onChangeComplete = id => {
    firestore()
      .collection('Todos')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          firestore()
            .collection('Todos')
            .doc(id)
            .update({
              completed: !documentSnapshot.data().completed,
            })
            .then(() => {
              console.log('Todo updated!');
            });
        }
      });
  };

  React.useEffect(() => {
    firestore()
      .collection('Todos')
      .onSnapshot(querySnapshot => {
        console.log('Todos data: ', querySnapshot.docs);

        let tmpData = [];

        querySnapshot.forEach(documentSnapshot => {
          tmpData.push({
            id: documentSnapshot.id,
            completed: documentSnapshot.data().completed,
            name: documentSnapshot.data().name,
          });
        });

        setData(tmpData);
      });
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surfaceVariant,
      }}>
      <Appbar.Header>
        <Appbar.Content title="ToDo List" />
      </Appbar.Header>
      <FlatList
        data={data ? data : []}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => onChangeComplete(item.id)}
            style={{flexDirection: 'row', padding: 8}}>
            <Text style={{paddingRight: 8}}>
              <Icon source={item.completed ? 'check' : 'close'} size={20} />
            </Text>
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
      <View>
        <TextInput
          label="Todo"
          mode="flat"
          value={todo}
          onChangeText={text => setTodo(text)}
        />
        <Button onPress={() => onPress()}>Add</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToDo;
