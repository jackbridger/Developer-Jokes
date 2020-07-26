import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Title, Subheading, TextInput, Button} from 'react-native-paper';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Jokes from './screens/Jokes/Jokes';
import Onboarding from './screens/Onboarding/Onboarding';

function LogoTitle() {
  return <Image source={require('./assets/icons/logo.png')} />;
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Jokes"
          component={Jokes}
          options={{
            headerTitle: () => <LogoTitle />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
