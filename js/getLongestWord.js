// Write a function that returns the length of the longest word 
// in the provided sentence. Make sure not to include any punctuation 
// in your count
// Your response should be a number.
// e.g.

// getLongestWord("over the garden wall.") 
// // expected output: 6
// getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// // expected output: 10
// function getLongestWord(str) {
//     str.forEach(function(words){
//         words.toUpperCase().joint();
//     });
//   // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
// }
// function splited(){
//     var toArr = "No, Greg, a-a bird's brain isn't big enough for cognizant speech."
//     var str=  toArr.split(' ');
//     return str;
    
// }
// splited();
// function getLongestWord(wordToCheck){
//     var strToArr=  wordToCheck.split(' ');
//     var x = [];
//     strToArr.forEach(function(word){
//         var h = word.length + ' ' + word;
//         console.log(h)
//         x.push(h);
//     });
//     // var arrToStr = x.join(' ');
//     // console.log(arrToStr);
// }
//solution in class
function getLongestWord(str){
    var arr = str.split(' ');
    arr.forEach(function(word){
        if(word.lenght > count){
            count = word.lenght;
        }
    });return count;
}
  
