let menu = document.getElementById("menu");
let list = document.getElementById("nav-phone");
let head = document.getElementById("head");
console.log(list.classList);
console.log(list.classList.value.split(' '));
menu.addEventListener("click", ()=>{
    console.log(list.classList.value.split(' '));
    if(list.classList.value.split(' ')[1] != "see"){
        list.classList.remove("hidden");
        list.classList.add("see");
    }
    else if(list.classList.value.split(' ')[1] === "see"){
        list.classList.remove("see");
        list.classList.add("hidden");
    }
})