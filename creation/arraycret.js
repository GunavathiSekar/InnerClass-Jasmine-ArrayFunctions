//from 
var fruits=[{1:'mango'},{2:'apple'},{3:'banana'},{4:'pomogranate'},{5:'rambutan'}];
var arr=Array.from(fruits);
console.log(arr);
//of
var fruits1=Array.of("mango","apple","banana","pomogranate","rambutan");
console.log(fruits1);
console.log(Array.of({1:'mango'},{2:'apple'},{3:'banana'},{4:'pomogranate'},{5:'rambutan'}));
//pop
console.log("pop at end\t",fruits1.pop());
//push
console.log("push at end\t"+fruits1.push("Strawberry"));
//Shift
console.log("shift,remove at beginning\t",fruits1.shift());
//Unshift
console.log("unshift,add to the beginning\t"+fruits1.unshift("mango","kiwi"));
//Splice
console.log("Splice",fruits1.splice(1,0,"jackfruit"));
console.log("display",fruits1);
console.log("join",fruits1.join('   '));
//slice
console.log("Slice",fruits1.slice(2,7));
console.log("concat",fruits1.concat("cherries"));
//CopyWithin
console.log("CopyWithin",fruits1.copyWithin(1,5,7));
//Fill
console.log("Fill",fruits1.fill("Lichee",0,1));
