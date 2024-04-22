import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Appbar, Avatar, Text, Icon, useTheme} from 'react-native-paper';

const User = ({navigation}) => {
  const theme = useTheme();
  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.Content title="User" />
        <Appbar.Action
          icon="camera-control"
          onPress={() => navigation.navigate('Options')}
        />
      </Appbar.Header>
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.colors.surfaceVariant,
        }}>
        <Avatar.Image
          size={128}
          style={{marginTop: 32}}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/701/23/png-clipart-black-and-brown-gorilla-illustration-discord-avatar-twitch-youtube-profile-mammal-face-thumbnail.png',
          }}
        />
        <Text
          variant="titleLarge"
          style={{...styles.text, fontWeight: 'bold', marginTop: 16}}>
          John Doe
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <Icon source="phone" size={20} />
          <Text variant="bodyMedium" style={{...styles.text, paddingLeft: 8}}>
            +84 394 173 864
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default User;
