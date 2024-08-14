// declare and define function here
function mostFrequentChar(str) 
  const frequency = {};
  for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  let maxFreq - 0;
  let mostFrequent = '';

  for (let char of str) {
    if (frequency[char] > maxFreq) {
      maxFreq = frequency[char];
      mostFrequent[char] = 1;
    }
  }

return mostFrequent;
}


// test cases
mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('mississippi'); // -> 'i'. 'i' and 's' appear with same frequency in 'mississippi' but 'i' appears first!
