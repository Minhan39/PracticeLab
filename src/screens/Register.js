import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput, useTheme, HelperText} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Register = () => {
  const theme = useTheme();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');
  const [isHide, setIsHide] = React.useState(true);
  const [errorEmail, setErrorEmail] = React.useState('');
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorRePassword, setErrorRePassword] = React.useState(false);

  const onPress = ({navigation}) => {
    if (!email.includes('@') || !email.includes('.')) {
      setErrorEmail('Email address is invalid!');
      return;
    } else {
      setErrorEmail('');
    }

    if (
      !password.match(/[a-z]/g) ||
      !password.match(/[A-Z]/g) ||
      !password.match(/[0-9]/g) ||
      password.length < 8
    ) {
      setErrorPassword(true);
      return;
    } else {
      setErrorPassword(false);
    }

    if (password !== rePassword) {
      setErrorRePassword(true);
      return;
    } else {
      setErrorRePassword(false);
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setErrorEmail('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setErrorEmail('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surfaceVariant,
      }}>
      <View style={{width: '90%'}}>
        <TextInput
          label="Email"
          style={{...styles.textinput}}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {errorEmail && <HelperText type="error">{errorEmail}</HelperText>}
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
        {errorPassword && (
          <HelperText type="error">
            Password is invalid, must have 8 characters, upper and lower
            character, number!
          </HelperText>
        )}
        <TextInput
          label="Re-password"
          style={{...styles.textinput}}
          value={rePassword}
          onChangeText={text => setRePassword(text)}
          secureTextEntry={isHide}
          right={
            <TextInput.Icon
              icon={isHide ? 'eye' : 'eye-off'}
              onPress={() => setIsHide(!isHide)}
            />
          }
        />
        {errorRePassword && (
          <HelperText type="error">Password isn't match!</HelperText>
        )}
        <Button
          mode="contained"
          style={{...styles.button}}
          onPress={() => onPress()}>
          REGISTER
        </Button>
      </View>
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
    width: '100%',
    marginTop: 16,
  },
  textinput: {
    width: '100%',
  },
});

export default Register;
