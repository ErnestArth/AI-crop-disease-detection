import {useState} from 'react';
import {Button, Image, View, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import {getPredictionResults} from '../services/model-services';
import {CropType} from '../services/types';
import {Picker} from '@react-native-picker/picker';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../App';

export default function ImageSelector() {
  const [image, setImage] = useState<string | null>(null);
  const [cropType, setCropType] = useState<CropType>(CropType.Potato);
  const {navigate} = useNavigation<StackNavigation>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets?.length) {
      setImage(result.assets[0].uri);
    }
  };

  const makePrediction = async () => {
    if (image) {
      const predictionResults = await getPredictionResults(image, cropType);
      navigate('Result', predictionResults);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={cropType}
        onValueChange={itemValue => setCropType(itemValue)}>
        <Picker.Item label={CropType.Potato} value={CropType.Potato} />
        <Picker.Item label={CropType.Tomato} value={CropType.Tomato} />
      </Picker>
      <Button title="Upload Image" onPress={pickImage} />
      {image && <Image source={{uri: image}} style={styles.image} />}
      {image && <Button title="Make Prediction" onPress={makePrediction} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
