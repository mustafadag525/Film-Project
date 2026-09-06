function UI() {}

UI.prototype.addFilmToUI = function (newfilm) {
  /*<!-- <tr>   buna benzer oluşturacağız
                                            <td><img src="" class="img-fluid img-thumbnail"></td>
                                            <td></td>
                                            <td></td>
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr> -->
              <!-- <tr>
*/

  //tbody id film
  const filmList = document.getElementById("films");

  filmList.innerHTML += `
    <tr>
        <td>
            <img src="${newfilm.url}" class="img-fluid img-thumbnail">
        </td>
        <td>${newfilm.title}</td>
        <td>${newfilm.director}</td>
        <td>
            <a href="#" class="btn btn-danger delete-film">Filmi Sil</a>
        </td>
    </tr>
`;
};

UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = ""; // tesztin içini boşaltma
  element2.value = "";
  element3.value = "";
};

UI.prototype.displayMessages = function (message, type) {
  //div oluşturacağız card bodyı seçiyoruz onun altına ekleyecepz

  const cardbody = document.querySelectorAll(".card-body")[0];

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardbody.appendChild(div);

  setTimeout(function () {
    // hata mesaıı 2 sn ekranda gösterir
    div.remove();
  }, 2000);
};

UI.prototype.loadAllFilms = function (films) {
  const filmlist = document.getElementById("films");
  films.forEach(function (film) {
    filmlist.innerHTML;
  });
};
