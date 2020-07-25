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

export default ({route}) => {
  const {developerName} = route.params;
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Title>Jokes for {developerName}</Title>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
