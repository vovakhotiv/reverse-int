module.exports = function reverse (n) {
  let arr = String(n).split('');
  let arrReverse = [];

  if (isNaN(arr[0])) {
    for (i = arr.length - 1; i > 0; i--) {
      arrReverse.push(arr[i]);
    }
  } else {
    for (i = arr.length - 1; i >= 0; i--) {
      arrReverse.push(arr[i]);
    }
  }

  return arrReverse.join('');
}