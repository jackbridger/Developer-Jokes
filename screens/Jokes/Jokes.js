import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card, Paragraph, Button, useTheme} from 'react-native-paper';

import jokesListData from './../../database/JokesList';
import personaliseJoke from '../../utils/personaliseJoke';
import upVote from '../../utils/upVote';
import downVote from '../../utils/downVote';
import storeDataLocally from '../../utils/storeDataLocally';
import getLocalData from '../../utils/getLocalData';
import sortJokes from '../../utils/sortJokes';

export default ({route}) => {
  const {fonts, colors} = useTheme();
  const {developerName} = route.params;
  const [jokesList, setJokesList] = useState();
  useEffect(() => {
    if (!developerName) {
      navigation.navigate('Home');
    }
  }, [developerName]);

  useEffect(() => {
    // get the stored jokes list
    // set jokes list
    // if jokes list doesn't exist, then updated it, then set it
    getLocalData()
      .then((data) => setJokesList(sortJokes(data)))
      .catch((err) => {
        storeDataLocally(jokesListData)
          .then((data) => {
            setJokesList(sortJokes(data));
          })
          .catch((err) => Alert.alert('error fetching data', err));
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {jokesList?.map((joke) => (
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

                <View
                  style={{
                    paddingBottom: 10,
                    paddingTop: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      storeDataLocally(downVote(joke.id, jokesList)).then(
                        (data) => {
                          setJokesList(data);
                        },
                      );
                    }}
                    style={{
                      backgroundColor: colors.red,
                      height: 65,
                      width: 65,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                    }}>
                    <Image
                      source={require('../../assets/icons/jokester-logo-down.png')}
                    />
                  </TouchableOpacity>
                  <Paragraph>Score: {joke.score}</Paragraph>
                  <TouchableOpacity
                    onPress={() => {
                      storeDataLocally(upVote(joke.id, jokesList)).then(
                        (data) => {
                          setJokesList(data);
                        },
                      );
                    }}
                    style={{
                      backgroundColor: colors.green,
                      height: 65,
                      width: 65,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                    }}>
                    <Image source={require('../../assets/icons/logo.png')} />
                  </TouchableOpacity>
                </View>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
