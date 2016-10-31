function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var chr = text[i];
    var idx = alphabet.indexOf(chr.toUpperCase());
    var newIdx = idx + 13;
    if (newIdx >= alphabet.length) {
      newIdx -= 26;
    }
    result += alphabet[newIdx];
  }
  return result;
}
