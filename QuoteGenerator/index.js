let btns = document.getElementById('btn');
let output = document.getElementById('box');
let output2 = document.getElementById('author');

function greetings() {
    var myDate = new Date();
    var hrs = myDate.getHours();
    var msg;

    if (hrs < 12)
        msg = 'Morning';
    else if (hrs >= 12 && hrs <= 16)
        msg = 'Afternoon';
    else if (hrs >= 16 && hrs <= 20)
        msg = 'Evening';
    else if (hrs >= 20 && hrs <= 24)
        msg = 'Night';

    document.getElementById('greet').innerHTML = msg ;
} 

let quote = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall"',
    '"The way to get started is to quit talking and begin doing."',
    '"Life is what happens when you\'re busy making other plans."',
    '"Don\'t judge each day by the harvest you reap but by the seeds that you plant."',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
    '"Always remember that you are absolutely unique. Just like everyone else."',
    '"The future belongs to those who believe in the beauty of their dreams."',
    '"Curiosity about life in all of its aspects, I think, is still the secret of great creative people."',
];

let author = [
    'Nelson Mandela',
    'Walt Disney',
    'John Lennon',
    'Robert Louis Stevenson',
    'Benjamin Franklin',
    'Mother Teresa',
    'Margaret Mead',
    'Eleanor Roosevelt',
    'Leo Burnett',
];

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    btns.style.background = bgColor;
    output.style.color = bgColor;
    output2.style.color = bgColor;
}

btns.addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random()*quote.length);
    var randomQuotes = quote[randomNumber]
    var randomAuthor = author[randomNumber]
    output.innerHTML = randomQuotes;
    output2.innerHTML = " - " + randomAuthor;
    random_bg_color();
})

greetings() ;