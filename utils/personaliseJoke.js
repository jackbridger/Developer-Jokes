// Takes an array of  e.g. below:

// [
//     'because they can’t be typed on ',
//     NAME_OF_DEVELOPER,
//     "'s binary keyboard.",
//   ]
// It creates a sentence from the array by converting NAME_OF_DEVELOPER into the name passed in
// But using the other strings in array as they are.
// So if name is passed as 'Jessy', the above becomes:
// "because they can’t be typed on Jessy's binary keyboard."

import NAME_OF_DEVELOPER from './../constants/NAME_OF_DEVELOPER';
export default (jokeArr, name) => {
  let jokeSentence = '';
  jokeArr.forEach((jokeSegment, i) => {
    let segmentToAdd;
    if (jokeSegment === NAME_OF_DEVELOPER) {
      segmentToAdd = name;
    } else {
      segmentToAdd = jokeSegment;
    }
    jokeSentence = jokeSentence.concat(segmentToAdd);
  });
  return jokeSentence;
};
