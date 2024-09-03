let button11 = document.getElementById("button11");
let button12 = document.getElementById("button12");

let button21 = document.getElementById("button21");
let button22 = document.getElementById("button22");

let button31 = document.getElementById("button31");
let button32 = document.getElementById("button32");

let button41 = document.getElementById("button41");
let button42 = document.getElementById("button42");

let button51 = document.getElementById("button51");
let button52 = document.getElementById("button52");

let button61 = document.getElementById("button61");
let button62 = document.getElementById("button62");

let button71 = document.getElementById("button71");
let button72 = document.getElementById("button72");

let button81 = document.getElementById("button81");
let button82 = document.getElementById("button82");

let button11_p = document.getElementById("button11_p");
let button12_p = document.getElementById("button12_p");

let button21_p = document.getElementById("button21_p");
let button22_p = document.getElementById("button22_p");

let button31_p = document.getElementById("button31_p");
let button32_p = document.getElementById("button32_p");

let button41_p = document.getElementById("button41_p");
let button42_p = document.getElementById("button42_p");

let button51_p = document.getElementById("button51_p");
let button52_p = document.getElementById("button52_p");

let button61_p = document.getElementById("button61_p");
let button62_p = document.getElementById("button62_p");

let button71_p = document.getElementById("button71_p");
let button72_p = document.getElementById("button72_p");

let button81_p = document.getElementById("button81_p");
let button82_p = document.getElementById("button82_p");

let mwtag1 = document.getElementById("mean_word_id_1");
let mwtag2 = document.getElementById("mean_word_id_2");
let mwtag3 = document.getElementById("mean_word_id_3");
let mwtag4 = document.getElementById("mean_word_id_4");
let mwtag5 = document.getElementById("mean_word_id_5");
let mwtag6 = document.getElementById("mean_word_id_6");
let mwtag7 = document.getElementById("mean_word_id_7");
let mwtag8 = document.getElementById("mean_word_id_8");

let ptag1 = document.getElementById("div2_p1");
let ptag2 = document.getElementById("div2_p2");
let ptag3 = document.getElementById("div2_p3");
let ptag4 = document.getElementById("div2_p4");
let ptag5 = document.getElementById("div2_p5");
let ptag6 = document.getElementById("div2_p6");
let ptag7 = document.getElementById("div2_p7");
let ptag8 = document.getElementById("div2_p8");

mwtag1.addEventListener("mouseover", function () {
  button11.style.display = "flex";
  button12.style.display = "flex";
  ptag1.style.display = "none";
});
mwtag1.addEventListener("mouseout", function () {
  button11.style.display = "none";
  button12.style.display = "none";
  ptag1.style.display = "block";
});


mwtag2.addEventListener("mouseover", function () {
    button21.style.display = "flex";
    button22.style.display = "flex";
    ptag2.style.display = "none";
})
mwtag2.addEventListener("mouseout", function () {
    button21.style.display = "none";
    button22.style.display = "none";
    ptag2.style.display = "block";
})


mwtag3.addEventListener("mouseover", function () {
    button31.style.display = "flex";
    button32.style.display = "flex";
    ptag3.style.display = "none";
})
mwtag3.addEventListener("mouseout", function () {
    button31.style.display = "none";
    button32.style.display = "none";
    ptag3.style.display = "block";
})


mwtag4.addEventListener("mouseover", function () {
    button41.style.display = "flex";
    button42.style.display = "flex";
    ptag4.style.display = "none";
})
mwtag4.addEventListener("mouseout", function () {
    button41.style.display = "none";
    button42.style.display = "none";
    ptag4.style.display = "block";
})



mwtag5.addEventListener("mouseover", function () {
    button51.style.display = "flex";
    button52.style.display = "flex";
    ptag5.style.display = "none";
})
mwtag5.addEventListener("mouseout", function () {
    button51.style.display = "none";
    button52.style.display = "none";
    ptag5.style.display = "block";
})



mwtag6.addEventListener("mouseover", function () {
    button61.style.display = "flex";
    button62.style.display = "flex";
    ptag6.style.display = "none";
})
mwtag6.addEventListener("mouseout", function () {
    button61.style.display = "none";
    button62.style.display = "none";
    ptag6.style.display = "block";
})


mwtag7.addEventListener("mouseover", function () {
    button71.style.display = "flex";
    button72.style.display = "flex";
    ptag7.style.display = "none";
})
mwtag7.addEventListener("mouseout", function () {
    button71.style.display = "none";
    button72.style.display = "none";
    ptag7.style.display = "block";
})


mwtag8.addEventListener("mouseover", function () {
    button81.style.display = "flex";
    button82.style.display = "flex";
    ptag8.style.display = "none";
})

mwtag8.addEventListener("mouseout", function () {
    button81.style.display = "none";
    button82.style.display = "none";
    ptag8.style.display = "block";
})











button11.addEventListener("click", function () {
  button11_p.innerText = "7 words";
});

button12.addEventListener("click", function () {
  button12_p.innerText = "Justice";
});

button21.addEventListener("click", function () {
  button21_p.innerText = "7 words";
});

button22.addEventListener("click", function () {
  button22_p.innerText = "Liberty";
});

button31.addEventListener("click", function () {
  button31_p.innerText = "8 words";
});

button32.addEventListener("click", function () {
  button32_p.innerText = "Equality";
});

button41.addEventListener("click", function () {
  button41_p.innerText = "10 words";
});

button42.addEventListener("click", function () {
  button42_p.innerText = "Fraternity";
});

button51.addEventListener("click", function () {
  button51_p.innerText = "11 words";
});

button52.addEventListener("click", function () {
  button52_p.innerText = "Sovereignty";
});

button61.addEventListener("click", function () {
  button61_p.innerText = "9 words";
});

button62.addEventListener("click", function () {
  button62_p.innerText = "Democracy";
});

button71.addEventListener("click", function () {
  button71_p.innerText = "7 words";
});

button72.addEventListener("click", function () {
  button72_p.innerText = "Secular";
});

button81.addEventListener("click", function () {
  button81_p.innerText = "9 words";
});

button82.addEventListener("click", function () {
  button82_p.innerText = "Socialist";
});


let solveButton = document.getElementById("solveButton");
let wordlist = document.getElementById("wordlist");
let newGameButton = document.getElementById("newGameButton");


solveButton.addEventListener("click", function () {
    wordlist.style.filter = "none";
})

newGameButton.addEventListener("click", function () {
    wordlist.style.filter = "blur(5px)";
})