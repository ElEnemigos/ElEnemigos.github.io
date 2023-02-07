let articles = {
    data: [
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "../html/reviews.html",
        },
        {
            gameName: "Assassin's Creed I",
            id:"Assasins",
            image:"imagenes/assasins_creed_1.jpeg",
            reference: "#",
        },
        {
            gameName:"Metal Gear Solid 3: Snake Eater",
            id:"Metal",
            image:"imagenes/Metal_Gear_Solid_3_Snake_Eater.jpg",
            reference: "#",
        },
        {
            gameName:"Devil May Cry",
            image:"imagenes/DevilMayCry.jpg",
            id:"Devil",
            reference: "#",
        },
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "#",
        },
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "#",
        },
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "#",
        },
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "#",
        },
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "#",
        },
        {
            gameName: "Ghost of Tsushima",
            image: "imagenes/gost_tsuchima.jpeg",
            id:"Ghost",
            reference: "#",
        },
    ],
  };
  
  
for (let i of articles.data){
    //Create Article
    let article = document.createElement("div");
    //Create class of the article
    article.classList.add("box" );
    //Create hiperlinks
    let link = document.createElement("a");
    link.setAttribute("href", i.reference);
    link.setAttribute("id", "enlaces")
    link.classList.add(i.id)
    link.classList.add("enlace");
    article.appendChild(link);
    //Create Article Name
    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = i.gameName;
    link.appendChild(name);
    //Article Image
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.classList.add("contain");
    link.appendChild(image);
  
    document.getElementById("articles").appendChild(article);
};

//const search = document.querySelector(".src");
//const clase = "cosa";
//document.getElementById("search").addEventListener("click", () => {
//  search.classList.add(clase);
//});
//document.getElementById("section").addEventListener("click", () => {
//  search.classList.remove(clase);
//});
let enlaces = document.getElementsByClassName("enlace");
console.log(enlaces);
for( let enl of enlaces){
    enl.addEventListener("click", () => {
        let cosa = enl.classList.value;
        console.log(cosa.split(' ')[0]);
        localStorage.setItem("game", cosa.split(' ')[0]);
    });
};








