import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {Title, Subheading, TextInput, Button} from 'react-native-paper';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default ({navigation}) => {
  const [developerName, setDeveloperName] = useState('');
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Title>Jokester</Title>
          <Subheading>
            Funny code review compliments for the excellent developers in your
            life
          </Subheading>
          <TextInput
            label="Developer Name"
            value={developerName}
            onChangeText={(text) => setDeveloperName(text)}
          />
          <Button
            onPress={() => {
              navigation.navigate('Jokes', {developerName});
              console.log('get jokes');
            }}>
            GET JOKES
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
