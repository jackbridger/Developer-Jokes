// Takes a list of jokes,
// Reorders them by score (descending)

export default (listOfJokes) => {
  return listOfJokes.sort(compare);
};

function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
}
