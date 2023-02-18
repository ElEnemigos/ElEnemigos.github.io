let reviews = {
    data:[
        {
            gameName:"Ghost of Tsushima",
            img:"../imagenes/gost_tsuchima.jpeg",
            by:"By Chiquito de la calzada",
            frase:"'El samurái deshonrado'",
            sinopsis:"El juego se remonta al año 1274 en la isla nipona de Tsushima, en plena invasión mongola. Tras fracasar en la defensa y ser uni de los pococs superviviente del ataque enemigo, Jin Sakai deberá dejar de lado su honor como samurái y enfrentarse al ejército mongol para liberar su hogar.",
            puntosPos:"-Historia muy buena e inmersiva, muy buenos graficos",
            puntosNeg:"-Pesies hasta resulta predecible.",
            valoraApart:"-Historia: 9'5\n-Jugabilidad/Gameplay:7'8\n-Sonidos:9\n-Banda Sonora:10\n-Gráficos:10",
            valoraFinal:"Ghost Of Tsushima es una apuesta muy acertada por parte de la desarrolladora Suker Punch.Pese a pecar en algunos aspectos del gameplay, el resto del juego lo compensa, dando como resultado en jugo imprescindible si eres jugador de PlayStation."
        }
    ]
}

for(let i of reviews.data){
    if(i.gameName.split(' ')[0] === localStorage.getItem("game")){
        console.log("Recibido");
        //div0 el hueco que aparece a la izquierda realmente esto no es necesario.
        let div0 = document.createElement("div");
        div0.classList.add("div0");
        //div1
        let div1 =document.createElement("div");
        div1.classList.add("div1");
        div1.style.backgroundImage ="url('"+ i.img + "')"
        let title = document.createElement("p");
        title.innerText= i.gameName;
        div1.appendChild(title);
        //div2
        let div2 = document.createElement("div");
        div2.classList.add("div2");
        let by = document.createElement("p");
        by.innerText = i.by;
        by.classList.add("by");
        div2.appendChild(by);
        let frase = document.createElement("h2");
        frase.innerText= i.frase;
        div2.appendChild(frase);
        let resumen = document.createElement("p");
        resumen.innerText=i.sinopsis;
        div2.appendChild(resumen);
        let ProsContras = document.createElement("h2");
        ProsContras.innerText="Pros y Contras";
        div2.appendChild(ProsContras);
        let Pros = document.createElement("p");
        Pros.innerText=i.puntosPos;
        let Contr = document.createElement("p");
        Contr.innerText=i.puntosNeg;
        div2.appendChild(Pros);
        div2.appendChild(Contr);

        
        
        
        
        //enlaces hacia el documento html :)
        document.getElementById("section").appendChild(div2);
        document.getElementById("section").appendChild(div1);
        document.getElementById("section").appendChild(div0);
    }
    else{
        let error =document.createElement("h1");
        error.innerText="No se ha encontrado el artículo";
        document.getElementById("section").appendChild(error);
    }
}