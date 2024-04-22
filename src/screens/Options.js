import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Appbar, Text, useTheme} from 'react-native-paper';

const data = [
  {
    id: 1,
    name: 'Update Profile',
  },
  {
    id: 2,
    name: 'Change Language',
  },
  {
    id: 3,
    name: 'Logout',
  },
];

const Options = ({navigation}) => {
  const theme = useTheme();
  return (
    <View style={{...styles.container}}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="User" />
      </Appbar.Header>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              paddingVertical: 8,
              paddingLeft: 16,
              borderBottomWidth: 1,
              borderColor: theme.colors.surfaceVariant,
            }}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Options;
