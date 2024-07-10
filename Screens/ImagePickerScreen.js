// ImagePickerScreen.js
import React, { useState } from 'react';
import { Button, Image, View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerScreen() {
  const [image, setImage] = useState(null);
  const [recents, setRecents] = useState([]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access photos is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setRecents(prev => [result.assets[0].uri, ...prev]);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access the camera is required!");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setRecents(prev => [result.assets[0].uri, ...prev]);
    }
  };

const renderItem = ({ item }) => (
    <Image source={require('../assets/crop.jpeg')} style={styles.recentImage} />
);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
          <Image source={require('../assets/camera.png')} style={styles.cameraIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Take a photo live with Camera app</Text>
      </View>
      <View style={styles.uploadSection}>
        <Text style={styles.uploadText}>Upload photo</Text>
        <Button title="Choose file" onPress={pickImage} color="green" />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.recents}>
        <Text style={styles.recentsText}>Recents</Text>
        {/* Add recent photos or placeholders here */}
        <FlatList
          data={recents}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    padding: 20,
    height: '55%',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cameraButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    marginBottom: 10,
  },
  cameraIcon: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  uploadSection: {
    padding: 20,
  },
  uploadText: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 500,
    alignSelf: 'center',
    margin: 20,
  },
  recents: {
    flex: 2,
    padding: 20,
  },
  recentsText: {
    fontSize: 16,
    marginBottom: 10,
  },
  recentImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});
