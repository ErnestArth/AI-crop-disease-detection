// ImagePickerScreen.js
import React, { useState } from 'react';
import { Button, Image, View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import useStore from '../lib/store';

const ImagePickerScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const {imageUri,setImageUri}= useStore()
  
  // const [recents, setRecents] = useState([]);

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
    console.log(result);

    if (!result.canceled) {
        setImage(result.assets[0].uri);
        // setImageUri(image)

      // console.log(imageUri);
      // setRecents(prev => [result.assets[0].uri, ...prev]);
      console.log("Image URI:", result.uri); // Debug log
      // navigation.navigate('ImageProcessing', { imageUri: result.assets[0].uri });
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
      console.log(image);
      // setRecents(prev => [result.assets[0].uri, ...prev]);
      
     
    }
  };
const predict =async()=> {
  //retrieve image state
  //sends a request to the endpoint
  //res> json 


  const res = {
    data:'prediction'
  }

  navigation.navigate('ImageProcessing', { imageUri: image,data: res.data });



}
const handlePrediction = async () => {
  setLoading(true);
  console.log("Image URI for prediction:", imageUri);

  try {
    // Example: Convert image to base64
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
      const base64data = reader.result;
      
      // Send image data to prediction API
      const predictionResponse = await fetch('YOUR_PREDICTION_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64data }),
      });

      const predictionData = await predictionResponse.json();
      setPredictionResult(predictionData);
      setLoading(false);

      // Example: Navigate to result screen with prediction data
      navigation.navigate('ImageProcessing', { imageUri: image,data: predictionData  });
    };
  } catch (error) {
    console.error("Error during prediction:", error);
    setLoading(false);
  }
};
// const navigateToPredictScreen = () => {
//   console.log('Navigating to Predict Screen with imageUri:');
//   navigation.navigate('Predict');
// };  

// const renderItem = ({ item }) => (
//     <Image source={require('../assets/crop.jpeg')} style={styles.recentImage} />
// );

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
        <TouchableOpacity style={styles.chooseButton} onPress={pickImage}>
          <Text style={styles.chooseButtonText}>Choose File</Text>
        </TouchableOpacity>
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View >
        {/* <Text style={styles.recentsText}>Recents</Text>
        Add recent photos or placeholders here */}
        {/* <FlatList
          data={recents}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        /> */}
        <TouchableOpacity style={styles.predictButton} onPress={predict}>
          <Text  style={styles.predictButtonText}>Predict</Text>
        </TouchableOpacity>
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
    height: '40%',
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
    width: 300,
    height: 300,
    alignSelf: 'center',
    margin: 5,
  },
  // recents: {
  //   flex: 2,
  //   padding: 20,
  // },
  // recentsText: {
  //   fontSize: 16,
  //   marginBottom: 10,
  // },
  // recentImage: {
  //   width: 100,
  //   height: 100,
  //   marginRight: 10,
  // },
  predictButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    width: 200, // Adjust the width of the button
    alignItems: 'center',
    alignSelf: 'center'
  },
  predictButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderRadius: 20,
    width: 200, // Adjust the width of the button
    alignItems: 'center',
    alignSelf: 'center'
  },
  chooseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImagePickerScreen;