import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


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
      <Text style={styles.title}>Login</Text>
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
      
      <Button 
        title="continue" 
        onPress={() => navigation.navigate('Success')}
        color="green"
     />
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
    marginTop: 140
  }
});

export default LoginScreen;
