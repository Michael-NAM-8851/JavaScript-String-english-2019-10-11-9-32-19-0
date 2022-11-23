// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase())


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
console.log(sentence.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" "))

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.split('￥')[1])
