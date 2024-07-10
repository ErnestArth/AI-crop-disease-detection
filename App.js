import {StyleSheet, View, Image,Text, TouchableOpacity, SafeAreaView, ImageBackground} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomButton from "./Button";
import SignupScreen from "./Screens/Signup";
import LoginScreen from "./Screens/Login";
import SuccessScreen from "./Screens/successScreen";
import ImagePickerScreen from "./Screens/ImagePickerScreen";

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/farm1.jpg')} style={styles.image} />
      <View style={styles.buttonContainer}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '70%',
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    // borderTopLeftRadius: 40
  },
  signUpButton: {
    backgroundColor: 'green',
    marginBottom: 10,
    width: '50%',
    borderRadius: 40,
  },
  signInButton: {
    backgroundColor: 'green',
    width: '70%',
    borderRadius: 40,
  },
});

