import React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageSelector from './Screens/ImageSelector';
import {ResultScreen} from './Screens/Result';
import {PredictionResults} from './services/types';

export type ScreenNames = ['ImageSelector', 'Result']; // type these manually
export type RootStackParamList = {
  Result: PredictionResults;
  ImageSelector: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ImageSelector">
        <Stack.Screen name="ImageSelector" component={ImageSelector} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
