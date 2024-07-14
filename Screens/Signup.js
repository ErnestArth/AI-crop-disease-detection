import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

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
      <Image source={require('../assets/logo.png')} style={styles.image} />
      {/* <Text style={styles.title}>Sign Up</Text> */}
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
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Success')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  // title: {
  //   fontSize: 24,
  //   marginBottom: 100,
  //   textAlign: 'center',
  // },
  input: {
    height: 80,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 40
  },
  anotherTitle: {
    marginTop: 50,
    marginBottom: 10
  },
  continueButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    width: 200, // Adjust the width of the button
    alignItems: 'center',
    alignSelf: 'center'
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 5,
    alignSelf: 'center'
  }
});

export default SignupScreen;
