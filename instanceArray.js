/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw) {
    this.name = name;
    this.email = email;
    this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
var cahlan = new User('Chalan', 'cahlan@devmounta.in', 'iLoveHashtags');
var lenny = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
console.log('Tyler\'s information is ' + tyler);
//Console.log all of Tylers information

//code here

for (var key in tyler) {
    console.log(tyler[key]);
}



console.log('Lenny\'s information is ' + cahlan);
//Now console.log all of Lennys information

  //code here
for (var key in lenny) {
    console.log(lenny[key]);
}

//Now create another instance of User using your own information and then add that to your users array.

  //code here

console.log('All my users names are ' + users);
//Now loop through your users Array and console.log every users name. 

//code here

for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
        console.log(users[i][key]);
    }
}