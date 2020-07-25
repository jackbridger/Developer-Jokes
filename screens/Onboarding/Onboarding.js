import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';

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
  const isFocused = useIsFocused();
  const [developerName, setDeveloperName] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  useEffect(() => {
    if (!isFocused) {
      setDeveloperName('');
    }
  }, [isFocused]);

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
            onChangeText={(text) => {
              setDisplayMessage(false);
              setDeveloperName(text);
            }}
          />
          {displayMessage && <Text>Please write a developer's name</Text>}
          <Button
            onPress={() => {
              if (developerName.length === 0) {
                setDisplayMessage(true);
              } else {
                navigation.navigate('Jokes', {developerName});
                console.log('get jokes');
              }
            }}>
            GET JOKES
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
