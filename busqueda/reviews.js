let reviews = {
    data:[
        {
            gameName:"Ghost of Tsushima",
            img:"imagenes/gost_tsuchima.jpeg",
            sinopsis:"El juego se remonta al año 1274 en la isla nipona de Tsushima, en plena invasión mongola. Tras fracasar en la defensa y ser uni de los pococs superviviente del ataque enemigo, Jin Sakai deberá dejar de lado su honor como samurái y enfrentarse al ejército mongol para liberar su hogar.",
            puntosPos:"Historia muy buena e inmersiva, muy buenos graficos",
            puntosNeg:"Pese a ser muy buena, la historia es simple y a veces hasta resulta predecible.",
            valoraApart:"-Historia: 9'5\n-Jugabilidad/Gameplay:7'8\n-Sonidos:9\n-Banda Sonora:10\n-Gráficos:10",
            valoraFinal:"Ghost Of Tsushima es una apuesta muy acertada por parte de la desarrolladora Suker Punch.Pese a pecar en algunos aspectos del gameplay, el resto del juego lo compensa, dando como resultado en jugo imprescindible si eres jugador de PlayStation."
        }
    ]
}

for(let i of reviews.data){
    if(i.gameName.split(' ')[0] === localStorage.getItem("game")){
        console.log("Recibido");
        //div1
        let divImage = document.createElement("div");
        divImage.classList.add("item");
        divImage.classList.add("item1");
        let image = document.createElement("img");
        image.setAttribute("href", i.img);
        image.setAttribute("id", "reviewImage")
        image.classList.add("reviewImage");
        //divImage.appendChild(image);
        let title = document.createElement("h1");
        title.innerText = i.gameName;
        divImage.appendChild(title);
        //div2
        let div2 = document.createElement("div");
        div2.classList.add("item");
        div2.classList.add("item2");
        let SIN = document.createElement("h2");
        SIN.innerText= "Resumen";
        div2.appendChild(SIN);
        let p = document.createElement("p");
        p.innerText = i.sinopsis;
        div2.appendChild(p);
        //div3
        let div3 = document.createElement("div");
        div3.classList.add("item");
        div3.classList.add("item3");
        let PP = document.createElement("h2");
        PP.innerText= "Puntos Positivos";
        div3.appendChild(PP);
        let PPp =document.createElement("p");
        PPp.innerText = i.puntosPos;
        div3.appendChild(PPp);
        //div4
        let div4 = document.createElement("div");
        div4.classList.add("item");
        div4.classList.add("item4");
        let PN = document.createElement("h2");
        PN.innerText= "Puntos Negativos";
        div4.appendChild(PN);
        let PNp = document.createElement("p");
        PNp.innerText = i.puntosNeg;
        div4.appendChild(PNp);
        //div5
        let div5 =document.createElement("div");
        div5.classList.add("item");
        div5.classList.add("item5");
        let Valpa = document.createElement("h2");
        Valpa.innerText = "Valoración por apartados";
        div5.appendChild(Valpa);
        let Valpap = document.createElement("p");
        Valpap.innerText = i.valoraApart;
        div5.appendChild(Valpap);
        //div6
        let div6 = document.createElement("div");
        div6.classList.add("item");
        div6.classList.add("item6");
        let VF = document.createElement("h2");
        VF.innerText = "Valoración Final";
        div6.appendChild(VF);
        let VFp = document.createElement("p");
        VFp.innerText = i.valoraFinal;
        div6.appendChild(VFp);

        document.getElementById("section").appendChild(div6)
        document.getElementById("section").appendChild(div5);
        document.getElementById("section").appendChild(div4);
        document.getElementById("section").appendChild(div3);
        document.getElementById("section").appendChild(divImage);
        document.getElementById("section").appendChild(div2);
    }
    else{
        let error =document.createElement("h1");
        error.innerText="No se ha encontrado el artículo";
        document.getElementById("section").appendChild(error);
    }
}