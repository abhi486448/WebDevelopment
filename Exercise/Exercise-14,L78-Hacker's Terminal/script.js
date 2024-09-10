//     Initializing Hacking...
//     Reading your Files...
//     Password files Detected...
//     Sending all passwords and personal files to server...
//     Cleaning up...

//     The three dots must blink so that it looks like a real terminal

let check = document.querySelector(".hack")
let count;


setTimeout(() => {
    count = `<h3>Initializing Hacking </h3>`
    check.insertAdjacentHTML("beforeend", `${count}`);
    setTimeout(() => {
        check.firstElementChild.insertAdjacentHTML("beforeend",".");
    }, 500);
    setTimeout(() => {
        check.firstElementChild.insertAdjacentHTML("beforeend"," .");
    }, 1000);
    setTimeout(() => {
        check.firstElementChild.insertAdjacentHTML("beforeend"," .");
    }, 1500);
}, 2000);
setTimeout(() => {
    count = `<h3>Reading your Files </h3>`
    check.insertAdjacentHTML("beforeend", `${count}`);
    setTimeout(() => {
        check.childNodes[1].insertAdjacentHTML("beforeend",".");
    }, 500);
    setTimeout(() => {
        check.childNodes[1].insertAdjacentHTML("beforeend"," .");
    }, 1000);
    setTimeout(() => {
        check.childNodes[1].insertAdjacentHTML("beforeend"," .");
    }, 1500);
}, 4500);
setTimeout(() => {
    count = `<h3>Password files Detected </h3>`
    check.insertAdjacentHTML("beforeend", `${count}`);
    setTimeout(() => {
        check.childNodes[2].insertAdjacentHTML("beforeend",".");
    }, 500);
    setTimeout(() => {
        check.childNodes[2].insertAdjacentHTML("beforeend"," .");
    }, 1000);
    setTimeout(() => {
        check.childNodes[2].insertAdjacentHTML("beforeend"," .");
    }, 1500);
}, 7000);
setTimeout(() => {
    count = `<h3>Sending all passwords and personal files to server </h3>`
    check.insertAdjacentHTML("beforeend", `${count}`);
    setTimeout(() => {
        check.childNodes[3].insertAdjacentHTML("beforeend",".");
    }, 500);
    setTimeout(() => {
        check.childNodes[3].insertAdjacentHTML("beforeend"," .");
    }, 1000);
    setTimeout(() => {
        check.childNodes[3].insertAdjacentHTML("beforeend"," .");
    }, 1500);
}, 9500);
setTimeout(() => {
    count = `<h3>Cleaning up </h3>`
    check.insertAdjacentHTML("beforeend", `${count}`);
    setTimeout(() => {
        check.childNodes[4].insertAdjacentHTML("beforeend",".");
    }, 500);
    setTimeout(() => {
        check.childNodes[4].insertAdjacentHTML("beforeend"," .");
    }, 1000);
    setTimeout(() => {
        check.childNodes[4].insertAdjacentHTML("beforeend"," .");
    }, 1500);
}, 12000);