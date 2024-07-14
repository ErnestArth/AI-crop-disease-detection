import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.anotherImage} />
      <Image source={require('../assets/success.png')} style={styles.image} />
      <Text style={styles.title}>Click next to continue.................</Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ImagePicker')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 1,
    borderRadius: 20,
    width: 100, // Adjust the width of the button
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  anotherImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 5,
    alignSelf: 'center'
  }
});

export default SuccessScreen;
