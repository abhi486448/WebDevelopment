console.log("Hello")
let click = document.querySelector("#btn");
let cont = document.querySelector(".container")

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    click.style.backgroundColor = "red";
    cont.insertAdjacentHTML("beforeend", "<div></div>");
    cont.lastElementChild.setAttribute("style", "width: 98%;height: 100px;margin-bottom: 10px;border-radius: 10px;display: flex;background-color: rgb(28, 27, 27);");

    let c1 = cont.lastElementChild;
    
    c1.insertAdjacentHTML("beforeend", "<div></div>");
    c1.insertAdjacentHTML("beforeend", "<div></div>");

    let c11 = cont.lastElementChild.firstElementChild;
    let c12 = cont.lastElementChild.lastElementChild;

    c11.setAttribute("style", "height: 100%;width: 178px;position: relative;")
    c12.setAttribute("style", "width: calc(100% - 178px);height: 100px;color:white;")

    c11.insertAdjacentHTML("afterbegin","<img>");
    c11.insertAdjacentHTML("beforeend","<div></div>");

    let c111 = c11.firstElementChild
    let c112 = c11.lastElementChild
    c111.setAttribute("style", "height: 100%;border-radius: 5px;")
    c111.setAttribute("src", `${thumbnail}`)
    c112.setAttribute("style", "width: 37px;height: 17px;background-color: black;color: white;opacity: 0.6;border-radius: 5px;position: absolute;right: 5px;bottom: 5px;padding: 5px 5px 5px 5px;")
    c112.innerHTML = `${duration}`;

    c12.insertAdjacentHTML("afterbegin","<div></div>");
    c12.insertAdjacentHTML("beforeend","<div></div>");

    let c121 = c12.firstElementChild;
    let c122 = c12.lastElementChild;

    c121.setAttribute("style", "margin-left: 8px;font-size: 20px;")
    c121.innerHTML = `${title}`;
    c122.setAttribute("style", "margin: 10px 0px 0px 3px;font-size: 14px;")

    c122.insertAdjacentHTML("afterbegin", "<spain></spain>")
    c122.insertAdjacentHTML("afterbegin", "<spain></spain>")
    c122.insertAdjacentHTML("afterbegin", "<spain></spain>")

    let c1221 = c122.firstElementChild;
    let c1222 = c122.childNodes[1];
    let c1223 = c122.lastElementChild;

    c1221.setAttribute("style","margin-left: 5px;opacity: 0.6;")
    c1221.innerHTML = `${cName}`;
    c1222.setAttribute("style","margin-left: 5px;opacity: 0.6;")
    
    if(views<=999){
        views = views.toString();
        c1222.innerHTML = ` • ${views}`;
    }else if(views>=1000 && views<=999999){
        views = views/1000;
        views = Math.floor(views);
        views = views.toString();
        c1222.innerHTML = ` • ${views}K`;
    }else if(views>=1000000 && views<=999999000){
        views = views/1000000;
        views = Math.floor(views);
        views = views.toString();
        c1222.innerHTML = ` • ${views}M`;
    }
    
    c1223.setAttribute("style","margin-left: 5px;opacity: 0.6;")
    monthsOld = monthsOld.toString();
    c1223.innerHTML = ` • ${monthsOld} months ago`;

    console.log(cont.innerHTML)
}
// click.addEventListener("click",createCard);
click.addEventListener("click", function(){
    createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 244500000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
});