// declare and define function here
function compress(s) {
  let compressed = '';
  let count = 1;

  for (let i =1; i < s.length; i++) {
    of (s[i] === s[i - 1]) {
      count++;
    } else {
      compressed += (count > 1 ? count : '') + s[i - 1];
      count = 1;
    }
  }

  compressed += (count > 1 ? count : '') + s[s.length - 1];
  return compressed;
}

  

// test cases
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
