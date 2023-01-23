const analyzeArray = (arr) => {
  const average = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  };

  const min = (arr) => {
    return Math.min(...arr);
  };

  const max = (arr) => {
    return Math.max(...arr);
  };

  const length = (arr) => {
    return arr.length;
  }

  const object = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  };

  return object;
};

export { analyzeArray };