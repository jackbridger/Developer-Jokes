import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';

import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {
  Title,
  Subheading,
  TextInput,
  Button,
  Paragraph,
  useTheme,
  Card,
  Surface,
} from 'react-native-paper';

export default ({navigation}) => {
  const {fonts, colors} = useTheme();
  const isFocused = useIsFocused();
  const [developerName, setDeveloperName] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);
  useEffect(() => {
    if (!isFocused) {
      setDeveloperName('');
    }
  }, [isFocused]);

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Surface style={{padding: 10, margin: 10}}>
        <Title style={{fontFamily: 'Roboto-Bold'}}>
          Get personalised developer jokes
        </Title>
        <Subheading style={{lineHeight: 40}}>
          Funny code review compliments for the excellent developers in your
          life
        </Subheading>
        <TextInput
          style={{
            // backgroundColor: colors.pink,
            margin: 20,
            padding: 0,
            borderRadius: 10,
          }}
          mode="outlined"
          label="Developer Name"
          value={developerName}
          onChangeText={(text) => {
            setDisplayMessage(false);
            setDeveloperName(text);
          }}
        />
        <Button
          mode="contained"
          style={{
            // backgroundColor: colors.pink,
            margin: 20,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingTop: 0,
            borderRadius: 10,
            color: 'black',
          }}
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
        {displayMessage && (
          <Text
            style={{
              color: colors.red,
              fontFamily: fonts.bold,
              padding: 10,
            }}>
            Please write a developer's name
          </Text>
        )}
      </Surface>
    </View>
  );
};
