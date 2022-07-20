//Задание 1:
const nameCity = 'Nikolaev',
    nameCountry = 'Ukraine',
    population = 500000,
    stadium = 'true';


console.log(`city: ${nameCity}, country: ${nameCountry}, population: ${population}, stadium: ${stadium}`);

//Задание 2:
const height = 40,
    widht = 70;

let square1 = height * widht;

console.log('square' + ': ' + square1 + 'cm2');

//Задание 3:
const time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

let result = time * speedOfFirst + time * speedOfSecond;

console.log('distance' + ' = ' + result + 'km');

//Задание 4:
const randomNumber = Math.floor(Math.random() * 100);
if(randomNumber < 20) {
    console.log('randomNumber меньше 20');
}else if(randomNumber > 50){
    console.log('randomNumber больше 50');
}else{
   console.log('randomNumber больше 20, и меньше 50');
};

//Задание 5:
switch(randomNumber) {
    case randomNumber < 20 :
        console.log('randomNumber меньше 20');
        break;
    case randomNumber > 50 :
        console.log('randomNumber больше 50');
        break;
    default :
        console.log('randomNumber больше 20, и меньше 50');
        break;
}

