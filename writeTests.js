function countVowels (string){
  var num = 0;
  var vowels = ["a","A","e","E","i","I","o","O","u","U"]
  if (typeof(string) !== "string" ) {
    return "this is not a string"
  }
    for (var i = 0; i < string.length; i++) {
        for (var ii =   0; ii < vowels.length; ii++) {
          if (string[i].includes(vowels[ii])) {
            num ++
          }
        }
    }
    return num;
}
module.exports = {countVowels};
