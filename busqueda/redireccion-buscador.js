document.getElementById("search").addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
      let searchInput = document.getElementById("search").value ;
      localStorage.setItem("search", searchInput);
      window.location="../buscar.html";
        
         
    }
  });