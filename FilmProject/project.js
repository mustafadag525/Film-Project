const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElemnt = document.querySelector("#director");
const urlElemnt = document.querySelector("#url");

const ui = new UI();

//storage oluştur

const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addfilm);

  document.addEventListener("DOMContentLoaded", function () {
    //storagedan yükleme için

    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
}

function addfilm(e) {
  e.preventDefault();

  const title = titleElement.value;
  const director = directorElemnt.value;
  const url = urlElemnt.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("tüm alanları doldurun", "danger");
    // hata mesajı
  } else {
    const newfilm = new Film(title, director, url);

    ui.addFilmToUI(newfilm);
    storage.addFilmToStorage(newfilm); //storageye film ekleme
    ui.displayMessages("film başarı ile eklendi", "success");
  }

  ui.clearInputs(titleElement, urlElemnt, directorElemnt);
}
