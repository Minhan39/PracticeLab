import React from 'react';
import {Dimensions, FlatList, Pressable, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {fetchContacts} from '../utility/api';

const {width} = Dimensions.get('window');

const Favorites = ({navigation}) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchContacts().then(data => setData(data));
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Pressable
          onPress={() => navigation.navigate('Profile', {item: item})}
          style={{
            width: width / 3,
            height: width / 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar.Image
            size={96}
            source={{
              uri: item.avatar,
            }}
          />
        </Pressable>
      )}
      numColumns={3}
      horizontal={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
