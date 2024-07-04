import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignupScreen = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    if (fullname && username && email && password) {
      Alert.alert('Signup Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Signup Failed', 'Please fill in all fields.');
    }
  navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="fullname"
        value={fullname}
        onChangeText={setFullname}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.anotherTitle}>By tapping "continue" you are accepting our
        Terms & conditions as well as our privacy policies
      </Text>
      <Button 
        title="continue" 
        onPress={handleSignup}
        color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 100,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 40
  },
  anotherTitle: {
    marginTop: 140
  }
});

export default SignupScreen;
