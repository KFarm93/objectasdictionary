//var phonebookDict = {
//  Alice: '703-493-1834',
//  Bob: '857-384-1234',
//  Elizabeth: '484-584-2923'
//};

//Exercise 1

// console.log(phonebookDict['Elizabeth']);

// phonebookDict['Kareem'] = "938-489-1234";
// console.log(phonebookDict['Kareem']);

// delete phonebookDict['Alice'];
// console.log(phonebookDict['Aice']);

// phonebookDict['Bob'] = "968-345-2345";
// console.log(phonebookDict['Bob']);

// console.log(phonebookDict);

// Histogram

function histogram(string) {
  var numLetter = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (!numLetter[char]) {
      numLetter[char] = 1;
    }
    else {
      numLetter[char] += 1;
  }
}
  console.log(numLetter);
  }


histogram('bananas');
