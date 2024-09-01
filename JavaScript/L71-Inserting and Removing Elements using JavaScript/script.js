// document.querySelector(".box")
// document.querySelector(".box").innerHTML
// document.querySelector(".container").innerHTML
// document.querySelector(".box").innerText
// document.querySelector(".container").innerText
// document.querySelector(".container").outerHTML
// document.querySelector(".container").tagName
// document.querySelector(".container").nodeName
// document.querySelector(".container").textContent
// document.querySelector(".container").hidden
// document.querySelector(".container").hidden = true
// document.querySelector(".box").innerHTML = "Hey I am Harry"
// document.querySelector(".box").hasAttribute("style")
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style", "display:inline")
// document.querySelector(".box").attributes
// document.querySelector(".box").removeAttribute("style")
// document.designMode = "on"
// document.querySelector(".box").dataset

// let div = document.createElement("div");
// div.innerHTML = "I have been inserted <b>by harry</b>"
// div.setAttribute("class", "created");
// document.querySelector(".container").prepend(div) //start me aye ga container ke ander
// document.querySelector(".container").append(div) //last me aye ga container ke ander
// document.querySelector(".container").before(div) //start me aye ga container ke bahar
// document.querySelector(".container").after(div) //last me aye ga container ke bahar

let cont = document.querySelector(".container")
// cont.insertAdjacentHTML("afterbegin", "<b>I am under the water. please help me ...</b>") //starting me container ke andar
// cont.insertAdjacentHTML("afterend", "<b>I am under the water. please help me ...</b>") //last me container ke bahar
// cont.insertAdjacentHTML("beforebegin", "<b>I am under the water. please help me ...</b>") //starting me container ke bahar
cont.insertAdjacentHTML("beforeend", "<b>I am under the water. please help me ...</b>") //last me container ke andar

// document.querySelector(".box").remove()
// document.querySelector(".container").classList
// document.querySelector(".container").className
// document.querySelector(".container").classList.add("harry")
// document.querySelector(".container").classList.remove("harry")
// document.querySelector(".container").classList.toggle("red")
