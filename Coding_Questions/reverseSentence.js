const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (inputSentence) => {
  const reversedSentence = reverseWords(inputSentence);
  console.log('Reversed Sentence:', reversedSentence);
  rl.close();
});

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}
