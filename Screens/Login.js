import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    if (email === 'myfarm@gmail.com' && username === 'username' && password === 'password') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Login Failed', 'Invalid email or username or password');
    }
  navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      {/* <Text style={styles.title}>Login</Text> */}
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
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
        keyboardType='username'
        autoCapitalize='none'
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
  loginButton: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: 'gray',
    width: '100%',
    color: "green"
  },
  anotherTitle: {
    marginTop: 20
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
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 5,
    alignSelf: 'center'
  }
});

export default LoginScreen;
