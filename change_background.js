var list = 
[
    "url('./image/1.png')",
    "url('./image/2.png')",
    "url('./image/3.png')",
    "url('./image/4.png')",
    "url('./image/5.png')",
    "url('./image/6.png')",
    "url('./image/7.png')",
    "url('./image/8.png')",
]

var choice = list[Math.floor(Math.random()*list.length)];

/* document.getElementById("test").innerHTML = choice;*/

document.body.style.backgroundImage = choice