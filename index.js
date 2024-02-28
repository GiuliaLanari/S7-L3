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
      //const card = document.getElementById("card");

      const divRow = document.getElementById("row");

      const divCol = document.createElement("div");
      divCol.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

      const card = document.createElement("div");
      card.classList.add("card");
      card.style = "height: 40rem";

      divRow.appendChild(divCol);

      divCol.appendChild(card);

      const img = document.createElement("img");
      img.src = libro.img;
      img.alt = libro.title;
      img.style = "object-fit: cover; height:20rem";
      img.classList.add("card-img-top");
      card.appendChild(img);

      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");

      const h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.innerText = libro.title;

      const prezzo = document.createElement("p");
      prezzo.classList.add("card-text");
      prezzo.innerText = libro.price + " £";

      const bottone = document.createElement("button");
      bottone.classList.add("btn", "me-1", "mb-2", "btn-danger");
      bottone.innerText = "Scarta";

      const btnBuy = document.createElement("button");
      btnBuy.classList.add("btn", "btn-primary");
      btnBuy.innerText = "Aggiungi al carello";

      divCardBody.appendChild(h5);
      divCardBody.appendChild(prezzo);
      divCardBody.appendChild(bottone);
      divCardBody.appendChild(btnBuy);
      card.appendChild(divCardBody);

      bottone.onclick = function (e) {
        card.parentNode.remove();

        console.log(e.currentTarget.closest(".col-12"));
      };

      btnBuy.onclick = function (e) {
        const lista = document.getElementById("lista");
        const li = document.createElement("li");

        li.innerText = h5.innerText;
        const bottoneRimuovi = document.createElement("button");
        bottoneRimuovi.classList.add("btn", "ms-2", "py-1", "btn-outline-danger", "btn-sm");
        bottoneRimuovi.innerText = "Rimuovi";
        li.appendChild(bottoneRimuovi);
        lista.appendChild(li);

        bottoneRimuovi.onclick = function (e) {
          li.remove();
        };
      };
    });
  })

  .catch((error) => console.log(error));
