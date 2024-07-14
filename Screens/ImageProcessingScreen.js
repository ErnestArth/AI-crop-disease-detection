// ImageProcessingScreen.js

import React, { useState } from 'react';
import { View, Image, StyleSheet, Button, Text, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import useStore from '../lib/store';

const ImageProcessingScreen = () => {
  
  const route = useRoute();
  const navigation = useNavigation();
  const { imageUri,data } = route.params;
  console.log(imageUri,'my image');

  const [loading, setLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

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
        navigation.navigate('PredictionResult', { predictionData });
      };
    } catch (error) {
      console.error("Error during prediction:", error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Text>No image selected</Text>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Predict" onPress={handlePrediction} />
      )}
      {predictionResult && (
        <Text>Prediction: {data}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default ImageProcessingScreen;
