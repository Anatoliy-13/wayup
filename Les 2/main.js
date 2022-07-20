//Задание 1:
for (i = 10; i <= 50; i = i +2) {
    console.log(i);
}


//Задание 2:
const man = {
    firstName : 'Andrey',
    secondName : 'Nikolaev',
    age : 42,
    pets : true
}
console.log(man);

//Задание 3:
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
let result = `${array[3]} ${array[7]} ${array[0]} ${array[8]} ${array[11]} ${array[5]} ${array[9]} ${array[6]} ${array[4]} ${array[1]} ${array[12]} ${array[2]} ${array[10]}`
console.log(result);

//Задание 4:
const getData = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
getData('Anatolii', 'Nikolaev');

//Задание 5:
let x = 21;
while (x < 67) {
    x = x + 2;
    console.log(x);
}

