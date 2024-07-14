import {StyleSheet, View, Image,Text, TouchableOpacity, SafeAreaView, ImageBackground} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomButton from "./Button";
import SignupScreen from "./Screens/Signup";
import LoginScreen from "./Screens/Login";
import SuccessScreen from "./Screens/successScreen";
import ImagePickerScreen from "./Screens/ImagePickerScreen";
import ImageProcessingScreen from './Screens/ImageProcessingScreen';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/farm1.jpg')} style={styles.image} >
        <View style={styles.overlay}>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
          <CustomButton
          label='Sign-Up'
          onPress={() => navigation.navigate('Sign-Up')}
          style={styles.signUpButton}
          />
          <CustomButton
          label='Already have an account'
          onPress={() => navigation.navigate('Login')}
          style={styles.signInButton}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign-Up" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="ImagePicker" component={ImagePickerScreen} />
        <Stack.Screen name="ImageProcessing" component={ImageProcessingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: 'darkgreen',
    marginBottom: 10,
    width: '40%',
    borderRadius: 40,
  },
  signInButton: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 40,
    borderColor: 'darkgreen',
    borderWidth: 2,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the transparency as needed
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 100,
  },
});

