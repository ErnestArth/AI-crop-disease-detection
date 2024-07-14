import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Result'>;

export const ResultScreen = ({route}: Props) => {
  const predictionResult = route.params;
  return (
    <View>
      <Text>{predictionResult.disease}</Text>
      <Text>{predictionResult.accuracy}</Text>
      <Text>{predictionResult.diseaseDescription}</Text>
      <Text>{predictionResult.suggestedTreatment}</Text>
    </View>
  );
};
