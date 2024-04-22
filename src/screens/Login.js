import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

const Login = () => {
  const theme = useTheme();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isHide, setIsHide] = React.useState(true);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surfaceVariant,
      }}>
      <Text variant="titleMedium">Todo and Chat App</Text>
      <TextInput
        label="Email"
        style={{...styles.textinput}}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        style={{...styles.textinput}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={isHide}
        right={
          <TextInput.Icon
            icon={isHide ? 'eye' : 'eye-off'}
            onPress={() => setIsHide(!isHide)}
          />
        }
      />
      <Button mode="contained" style={{...styles.button}} onPress={() => {}}>
        LOGIN
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    marginTop: 16,
  },
  textinput: {
    width: '90%',
    marginTop: 16,
  },
});

export default Login;
