var fruits=Array.of("mango","apple","banana","pomogranate","rambutan","kiwi","apple","jackfruit");
console.log(fruits);
//entries
var iterator1 = fruits.entries();
console.log("Entries",iterator1.next().value);
for(let value of iterator1)
{
    console.log("Entries",value);
}
console.log("Entry List",...fruits.entries());
//keys
console.log("keys",...fruits.keys());
//values
// console.log("Values",...fruits.values());
//Index
console.log("Index",fruits.indexOf("apple"));
console.log("LastIndexof",fruits.lastIndexOf("apple"));
//Reverse
console.log(fruits.reverse());
//sort
console.log(fruits.sort());
//include
console.log("Boolean",fruits.includes("apple"));




