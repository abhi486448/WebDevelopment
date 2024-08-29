let randum1 = Math.random();
if (randum1 <= 0.3) {
    document.querySelectorAll(".box").forEach(e =>{
        e.style.backgroundColor = "blue"
        e.style.color = "yellow"
    })
}
else if (randum1 <= 0.6) {
    document.querySelectorAll(".box").forEach(e =>{
        e.style.backgroundColor = "purple"
        e.style.color = "white"
    })
}
else {
    document.querySelectorAll(".box").forEach(e =>{
        e.style.backgroundColor = "green"
        e.style.color = "brown"
    })
}