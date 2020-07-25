export default (id, jokesList) => {
  return jokesList.reduce((accum, joke) => {
    if (joke.id === id) {
      accum.push({...joke, score: joke.score - 1});
      return accum;
    } else {
      accum.push(joke);
      return accum;
    }
  }, []);
};
