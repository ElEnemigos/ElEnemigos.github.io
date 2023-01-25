
document.getElementById("search").addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    let searchInput = document.getElementById("search").value ;
    localStorage.setItem("search", searchInput);
    window.location="buscar.html";
      
       
  }
});

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

