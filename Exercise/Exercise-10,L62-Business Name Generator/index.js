let Adj = {
    "1": "Ceazy",
    "2": "Amazing",
    "3": "Fire",
}

let Shop = {
    "1": "Engin",
    "2": "Food",
    "3": "Garments",
}

let Another = {
    "1": "Bros",
    "2": "Limited",
    "3": "Hub",
}

let randum1 = Math.random();
let a;
if (randum1 <= 0.3) {
    a = Adj[1];
}
else if (randum1 <= 0.6) {
    a = Adj[2];
}
else {
    a = Adj[3];
}



let randum2 = Math.random();
let b;
if (randum2 <= 0.3) {
    b = Shop[1];
}
else if (randum2 <= 0.6) {
    b = Shop[2];
}
else {
    b = Shop[3];
}



let randum3 = Math.random();
let c;
if (randum3 <= 0.3) {
    c = Another[1];
}
else if (randum3 <= 0.6) {
    c = Another[2];
}
else {
    c = Another[3];
}


console.log(a + " " + b + " " + c);
