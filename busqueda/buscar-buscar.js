//var script = document.createElement('script');
//script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
//document.getElementsByTagName('head')[0].appendChild(script);

//$(window).on('beforeunload', function(){

//});


window.onload = function() {
    let cosa = localStorage.getItem("search");
    let URLactual = window.location.pathname;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".box");
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.toUpperCase().includes(cosa.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
};


document.getElementById("search").addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        //initializations
        let searchInput = document.getElementById("search").value ;
        localStorage.setItem("search", searchInput);
        let cosa = localStorage.getItem("search");
        let URLactual = window.location.pathname;
        let elements = document.querySelectorAll(".product-name");
        let cards = document.querySelectorAll(".box");
        elements.forEach((element, index) => {
            //check if text includes the search value
            if (element.innerText.toUpperCase().includes(cosa.toUpperCase())) {
              //display matching card
                cards[index].classList.remove("hide");
            } else {
              //hide others
                cards[index].classList.add("hide");
            }
        });
         
    }
})


//const body = document.body;
const body = document.querySelector(".page-header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});