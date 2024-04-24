import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput, useTheme} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Login = () => {
  const theme = useTheme();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isHide, setIsHide] = React.useState(true);

  GoogleSignin.configure({
    webClientId:
      '317680663026-1j0sc9a33lst4ponqv8h3g1jm7pd9onk.apps.googleusercontent.com',
  });

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surfaceVariant,
      }}>
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
      <Button
        onPress={() =>
          onGoogleButtonPress().then(value => {
            console.log('Signed in with Google!');
            console.log(value);
          })
        }>
        Google Sign-In
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
