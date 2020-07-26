import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {
  Title,
  Subheading,
  TextInput,
  Button,
  Card,
  Paragraph,
  useTheme,
} from 'react-native-paper';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import jokesListData from './../../database/JokesList';
import personaliseJoke from '../../utils/personaliseJoke';
import upVote from '../../utils/upVote';
import downVote from '../../utils/downVote';

export default ({route}) => {
  const {fonts, colors} = useTheme();
  const {developerName} = route.params;
  const [jokesList, setJokesList] = useState(jokesListData);
  useEffect(() => {
    if (!developerName) {
      navigation.navigate('Home');
    }
  }, [developerName]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {jokesList.map((joke) => (
            <Card
              elevation={3}
              key={joke.id}
              style={{
                // backgroundColor: colors.pink,
                margin: 20,
                padding: 10,
                borderRadius: 10,
              }}>
              <Card.Content>
                <Paragraph style={{fontFamily: fonts.bold}}>
                  {personaliseJoke(joke.setup, developerName)}
                </Paragraph>
                <Paragraph style={{fontFamily: fonts.regular}}>
                  {personaliseJoke(joke.punchline, developerName)}
                </Paragraph>
                <Paragraph>Score: {joke.score}</Paragraph>
                <Button
                  onPress={() => setJokesList(upVote(joke.id, jokesList))}
                  style={{
                    backgroundColor: colors.green,
                  }}>
                  Upvote
                </Button>
                <Button
                  onPress={() => setJokesList(downVote(joke.id, jokesList))}
                  style={{
                    backgroundColor: colors.red,
                  }}>
                  Downvote
                </Button>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
