let articles = {
  data: [
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
          reference: "#",
      },
      {
          gameName: "Assassin's Creed I",
          image:"imagenes/assasins_creed_1.jpeg",
          reference: "#",
      },
      {
          gameName:"Metal Gear Solid 3: Snake Eater",
          image:"imagenes/Metal_Gear_Solid_3_Snake_Eater.jpg",
          reference: "#",
      },
      {
          gameName:"Devil May Cry",
          image:"imagenes/DevilMayCry.jpg",
          reference: "#",
      },
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
          reference: "#",
      },
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
          reference: "#",
      },
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
          reference: "#",
      },
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
          reference: "#",
      },
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
          reference: "#",
      },
      {
          gameName: "Ghost of Tsushima",
          image: "imagenes/gost_tsuchima.jpeg",
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
}





document.getElementById("search").addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    let searchInput = document.getElementById("search").value ;
    localStorage.setItem("search", searchInput);
    window.location="../buscar.html";
      
       
  }
})