function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.');
    };
  }
  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
console.log(person1['age']);
console.log(person1.greeting());
console.log(person1.bio());
console.log(person1.interests[0]);
console.log(person1);
Person.prototype.farewell = function() {
    console.log(this.name.first + ' has left the building. Bye for now!');
  };
  var person2=Object.create(person1);
  console.log(person2.age);
  console.log(person2.farewell());
