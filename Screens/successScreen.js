import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/success.png')} style={styles.image} />
      <Text style={styles.title}>Click next to continue.................</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('ImagePicker')}
        color="green"
      />
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
    marginBottom: 24,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 24,
  }
});

export default SuccessScreen;
