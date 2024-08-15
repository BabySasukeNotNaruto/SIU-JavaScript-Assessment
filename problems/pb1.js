// declare and define function here

function replaceSpaces(sentence,char) {
  return sentence.split('').join(char);
}

// test cases
replaceSpaces('Today is a good day', '-'); // -> 'Today-is-a-good-day'
replaceSpaces('Tomorrow will be a great day', '_'); // -> 'Tomorrow_will_be_a_Great_Day'
