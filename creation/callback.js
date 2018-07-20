var fruits=Array.of("mango","apple","banana","pomogranate","rambutan","kiwi","apple","jackfruit");
//Find
var found = fruits.find(function(element) {
  return element.length > 3;
});
console.log("Find",found);
//Find Index
var found1 =fruits.findIndex(function(element) {
    return element.length > 8;
  });
  console.log("FindIndex",found1);
  //Some
  var found2 = fruits.some(function(element) {
    return element.length > 3;
  });
  console.log("some",found2);
  //Every
  var found3 = fruits.every(function(element) {
    return element.length > 11;
  });
  console.log("Every",found3);
  //Reduce Right
  const array1 = [["aabb", "ccdd"], ["eeff", "gghh"], ["iijj", "gghh"]].reduceRight(
    (previousValue, currentValue) => previousValue.concat(currentValue)
  );
  
  console.log(array1);

