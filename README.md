# Ferly jokes app

![](https://i.imgur.com/v4FX6u4.png =250x) ![](https://i.imgur.com/4z24FaW.png =250x)

## How to run the app on ios

`git clone`
`npm i`
`cd ios && pod install`
`npm run ios`

## User research

### When did you last use a jokes website and why?

![](https://i.imgur.com/n28vy8r.jpg)

Only a couple of my friends had ever used a jokes website. But they uncovered a potential use case... for developers!

### Zooming in on a problem:

**inspiration for fun ways to compliment developer colleagues in a pull request**

![](https://i.imgur.com/e4yDAvg.jpg)

### Problem considerations

![](https://i.imgur.com/c6l8fzu.jpg)

## Rough user stories

- As a user, I should be able to find funny jokes
- As a user, I should be able to see the cumulative score of each joke
- As a user I should be able to upvote/downvote jokes
- As a user, I should see jokes tailored to my friend's name

## Wireframes

### Low fidelity wireframes

![](https://i.imgur.com/G97G2ED.jpg)

### Figma wireframes (adjusted)

![](https://i.imgur.com/fo5cjJD.png)

## Architecture/key functions initial plan

![](https://i.imgur.com/m4SEgy0.jpg =250x)

## Questions:

### Did you get stuck somewhere?

- Custom fonts: a pain to get them working in React Native. React-Native link not working: https://stackoverflow.com/questions/60925703/custom-fonts-not-working-on-react-native-0-62 - solved by copying fonts in manually into ios.
- Where this came from
  ![](https://i.imgur.com/SOm2Z0y.png =250x)

### Did you learn something?

- useInFocus - When using Navigation, can use useInFocus as well as useEffect for screens
- Learned how to use AsyncStorage to store data locally

### How much time did you spend on it?

About half a day on Saturday and most of the day on Sunday

### Favourite joke for any developer

![](https://i.imgur.com/iYIRJTp.png)
