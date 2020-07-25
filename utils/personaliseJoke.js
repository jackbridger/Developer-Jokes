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
