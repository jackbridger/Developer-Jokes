// Function that takes an id,
// downvotes the joke with that id and returns the amended array

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
