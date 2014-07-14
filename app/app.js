/* global prompt:true */
var prompt = require('sync-prompt').prompt;

var people =[];
var dog = [];
var cat = [];
var goat = [];

var person1 ={name:'bob', age:10, pets:[]};
var person2 ={name:'sam', age:5, pets: []};
var person3 ={name:'jill', age:7, pets:[]};

people.push(person1, person2, person3);



var option = prompt('(d)og, (c)at, (g)oat, or (q)uit?: ');
   while (option !== 'q') {
     if(option === 'd') {
      var name = prompt('Name: ');
      var dogAge = prompt('Dog Age: ');
      var dogBreed = prompt('Dog Breed: ');
      dogAge = parseInt(dogAge);
    var dog2 = {name:name, age:dogAge, breed:dogBreed};
      dog.push(dog2);
    option = prompt('(d)og, (c)at, (g)oat, or (q)uit?: ');
    }else if (option === 'c') {
      var name = prompt('Name: ');
      var catGender = prompt('Cat Gender: ');
      var catColor = prompt('Cat Color: ');
      var cat2 = {name:name, gender:catGender, color:catColor};
      cat.push(cat2);
    option = prompt('(d)og, (c)at, (g)oat, or (q)uit?: '); 
    }else if (option ==='g') {
      var goatGender = prompt('Goat Gender: ');
      var goatColor = prompt('Goat Color: ');
      var name = prompt('Goat Name: ');
      var goat2 = {gender:goatGender, color:goatColor, name:name};
      goat.push(goat2);
    option = prompt('(d)og, (c)at, (g)oat, or (q)uit?: ');
    }
   }

option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
while(option !== 'q') {
  for(var i = 0; i < people.length; i++){
    if(people[i].name[0] === option){
      var client = (people[i]);
      break;
  }
  }  

  var animals;
  console.log('Client:', client);

  var choice = prompt('What type of Pet? (d)og, (c)at, (g)oat: ');
  switch(choice){
    case 'd':
      console.log('Dogs:', dog);
      animals = dog;
      break;
    case 'c':
      console.log('Cats:', cat);
      animals = cat;
      break;
    case 'g':
      console.log('Goats:', goat);
      animals = goat;
  }
  var name = prompt('What is the name of the animal you want to adopt? ');
  for( var i = 0; i < animals.length; i++){
    if(animals[i].name === name) {
      var animal = animals[i];
      var index = i;
      break;
 }
}
  console.log('Animal:', animal);

  animals.splice(index, 1);
  client.pets.push(animal);
  console.log('After adoption:', client);
  console.log('Animals array:', animals);

  option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
}
console.log('dogs:', dog);
console.log('cats:', cat);
console.log('goats:', goat);










