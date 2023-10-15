const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter values separated by spaces: ', (input) => {
  const inputArray = input.split(' ').map(item => {
    const num = parseFloat(item);
    return isNaN(num) ? item : num;
  });

  const sortedArray = sortArrayDesc(inputArray);

  console.log('Sorted Array (descending order):', sortedArray);

  rl.close();
});

function sortArrayDesc(arr) {
  return arr.slice().sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
}
