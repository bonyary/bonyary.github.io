var list = 
[
    "url('./image/1.jpg')",
    "url('./image/2.jpg')",
    "url('./image/3.jpg')",
    "url('./image/4.jpg')",
    "url('./image/5.jpg')",
    "url('./image/6.jpg')",
    "url('./image/7.jpg')",
    "url('./image/8.jpg')",
]

var choice = list[Math.floor(Math.random()*list.length)];

/* document.getElementById("test").innerHTML = choice;*/

document.body.style.backgroundImage = choice
