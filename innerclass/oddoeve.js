var rsl = {even:[], odd:[]};

[1,2,34,54,55,34,32,11,19,17,54,66,13].filter((val,key,arr)=>
{
    var wrd = (val % 2) ? 'odd' : 'even';
    console.log(key);
    console.log(wrd);
    console.log(rsl[wrd].length);
    rsl[wrd][rsl[wrd].length] = val;
});

console.log(rsl);

var arr1 = ['two', 'three'];
var arr2 = ['one', ...arr1, 'four', 'five'];
var arr3=[...arr1]
console.log(arr2);
console.log(Array.of({'x':'a'},{'y':'b'}));
// console.log(Array.from({'x':'a'},{'y':'b'}));
// console.log(Array.from("str", 2, 3));

