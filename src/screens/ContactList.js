import React from 'react';
import {StyleSheet, View, FlatList, Pressable} from 'react-native';
import {Avatar, Text, useTheme} from 'react-native-paper';
import {fetchContacts} from '../utility/api';

const ContactList = ({navigation}) => {
  const theme = useTheme();

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchContacts().then(data => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Profile', {item: item})}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.surfaceVariant,
                paddingLeft: 16,
              }}>
              <Avatar.Image
                size={48}
                source={{
                  // uri: 'https://e7.pngegg.com/pngimages/701/23/png-clipart-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-thumbnail.png',
                  uri: item.avatar,
                }}
              />
              <View style={{paddingLeft: 16}}>
                <Text
                  variant="titleMedium"
                  style={{...styles.text, fontWeight: 'bold'}}>
                  {item.lastname} {item.firstname}
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{...styles.text, color: theme.colors.primary}}>
                  {item.phone}
                </Text>
              </View>
            </Pressable>
          );
        }}
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

export default ContactList;
