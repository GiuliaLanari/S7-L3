fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nel reperimento dati");
    }
  })

  .then((arrOjbLibri) => {
    console.log("libri", arrOjbLibri[0]);

    arrOjbLibri.forEach((libro) => {
      // const objLibro = arrOjbLibri[0];
      const card = document.getElementById("card");
      /*
      const divRow = document.getElementById("row");
      divRow.appendChild(divCol);
      const divCol = document.createElement("div");
      divCol.classList.add("col-12", "ol-md-4", "col-lg-3");
      divCol.appendChild(card);
      
      const card = document.createElement("div");
      card.classList.add("card");
      */
      const img = document.createElement("img");
      img.src = libro.img;
      img.alt = libro.title;
      img.style = "object-fit: cover";
      img.classList.add("card-img-top");
      card.appendChild(img);

      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");

      const h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.innerText = libro.title;

      const prezzo = document.createElement("p");
      prezzo.classList.add("card-text");
      prezzo.innerText = libro.price + " £";

      const bottone = document.createElement("button");
      bottone.classList.add("btn", "btn-danger");
      bottone.innerText = "Scarta";

      divCardBody.appendChild(h5);
      divCardBody.appendChild(prezzo);
      divCardBody.appendChild(bottone);
      card.appendChild(divCardBody);

      bottone.onclick = function (e) {
        card.remove();
      };
    });
  })

  .catch((error) => console.log(error));
