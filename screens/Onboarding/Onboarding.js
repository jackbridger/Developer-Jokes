import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {View} from 'react-native';
import {
  Title,
  Subheading,
  TextInput,
  Button,
  useTheme,
  Surface,
  Paragraph,
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
      <Surface style={{padding: 10, margin: 20}}>
        <Title style={{fontFamily: fonts.bold}}>
          Get personalised developer jokes
        </Title>
        <Subheading style={{lineHeight: 35}}>
          Funny code review compliments for the excellent developers in your
          life
        </Subheading>
        <TextInput
          style={{
            margin: 20,
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
            margin: 20,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingTop: 0,
            borderRadius: 10,
            color: fonts.black,
          }}
          onPress={() => {
            if (developerName.length === 0) {
              setDisplayMessage(true);
            } else {
              navigation.navigate('Jokes', {developerName});
            }
          }}>
          GET JOKES
        </Button>
        {displayMessage && (
          <Paragraph
            style={{
              color: colors.red,
              fontFamily: fonts.bold,
              padding: 10,
            }}>
            Please write a developer's name
          </Paragraph>
        )}
      </Surface>
    </View>
  );
};
