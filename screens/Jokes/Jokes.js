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
  const {developerName} = route.params;
  const [jokesList, setJokesList] = useState(jokesListData);

  useEffect(() => {
    if (!developerName) {
      navigation.navigate('Onboarding');
    }
  }, [developerName]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Title>Jokes for {developerName}</Title>
          {jokesList.map((joke) => (
            <Card key={joke.id}>
              <Card.Content>
                <Paragraph>
                  {personaliseJoke(joke.setup, developerName)}
                </Paragraph>
                <Paragraph>
                  {personaliseJoke(joke.punchline, developerName)}
                </Paragraph>
                <Paragraph>Score: {joke.score}</Paragraph>
                <Button
                  onPress={() => setJokesList(upVote(joke.id, jokesList))}>
                  Upvote
                </Button>
                <Button
                  onPress={() => setJokesList(downVote(joke.id, jokesList))}>
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
