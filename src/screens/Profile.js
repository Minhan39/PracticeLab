import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Avatar, Text, Icon, useTheme} from 'react-native-paper';

const Profile = ({navigation, route}) => {
  const theme = useTheme();

  const [item, setItem] = React.useState({});

  React.useEffect(() => {
    setItem(route.params?.item);
  }, [route.params?.item]);

  return (
    <View
      style={{
        ...styles.container,
      }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={item.firstname} />
      </Appbar.Header>
      <View
        style={{...styles.top, backgroundColor: theme.colors.surfaceVariant}}>
        <Avatar.Image
          size={128}
          style={{marginTop: 32}}
          source={
            item == null || item.avatar == null
              ? require('../images/default.jpg')
              : {
                  uri: item.avatar,
                }
          }
        />
        <Text
          variant="titleLarge"
          style={{...styles.text, fontWeight: 'bold', marginTop: 16}}>
          {item.lastname} {item.firstname}
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <Icon source="phone" size={20} />
          <Text variant="bodyMedium" style={{...styles.text, paddingLeft: 8}}>
            {item.phone}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          paddingLeft: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <Icon source="email" size={20} />
          <View style={{paddingLeft: 16}}>
            <Text
              variant="titleMedium"
              style={{...styles.text, fontWeight: 'bold'}}>
              Email
            </Text>
            <Text
              variant="bodyMedium"
              style={{...styles.text, color: theme.colors.primary}}>
              {item.email}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <Icon source="phone" size={20} />
          <View style={{paddingLeft: 16}}>
            <Text
              variant="titleMedium"
              style={{...styles.text, fontWeight: 'bold'}}>
              Work
            </Text>
            <Text
              variant="bodyMedium"
              style={{...styles.text, color: theme.colors.primary}}>
              {item.phone}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <Icon source="cellphone" size={20} />
          <View style={{paddingLeft: 16}}>
            <Text
              variant="titleMedium"
              style={{...styles.text, fontWeight: 'bold'}}>
              Personal
            </Text>
            <Text
              variant="bodyMedium"
              style={{...styles.text, color: theme.colors.primary}}>
              {item.phone}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 32,
  },
  text: {},
});

export default Profile;
