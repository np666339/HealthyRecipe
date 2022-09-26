import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bruschetta from './Images/bruschetta.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({ navigation }) {

  const [serving, setServing] = useState(0)

  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Bruschetta Recipe</Text>
      <Image source={bruschetta} />
      <Text>  </Text>
      <TextInput
        style={styles.textPut}
        placeholder="Enter the Number of Servings"
        onChangeText={newText => setServing(newText)}
      />
      <Text> </Text>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Recipe', {serving})}>
        <Text style={styles.buttonText}> View Recipe </Text>
       </TouchableOpacity>
    </View>
  );
}

function RecipeScreen({route}) {

  const { serving } = route.params;
  return (
    <View style={styles.container2}>
      <Text style={styles.header}>Bruschetta</Text>

      <Text style={styles.subhead}> Ingrediants </Text>
      <Text style={styles.ingrediants}> {serving * 4} Plum Tomatos</Text>
      <Text style={styles.ingrediants}> {serving * 6} Basil Leaves</Text>
      <Text style={styles.ingrediants}> {serving * 3} Garlic Cloves, Chopped</Text>
      <Text style={styles.ingrediants}> {serving * 3} TB Olive Oil</Text>
      <Text> </Text>
      <Text style={styles.subhead}> Directions </Text>
      <Text style={styles.ingrediants}> Combine the ingrediants add salt to taste. Top French bread slices with mixture</Text>
      <Text style={{paddingTop: 100}}>  </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Recipe" component={RecipeScreen} options={{
          title: ' ',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
  textPut: {
    backgroundColor: 'white',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    borderRadius: 50,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f4511e'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 45,
    paddingBottom: 20,
    alignSelf: 'center'
  },
  subhead: {
    fontWeight: 'bold',
    fontSize:30,
    paddingLeft: 5
  },
  ingrediants: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 35,
    paddingRight: 50
  }
})

export default App;