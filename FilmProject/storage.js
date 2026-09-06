//filmleri storageye ekleme

function Storage() {}

Storage.prototype.addFilmToStorage = function (newfilm) {
  let films = this.GetFilmsFromStorage();
  films.push(newfilm);

  localStorage.setItem("films", JSON.stringify(films));
};

Storage.prototype.GetFilmsFromStorage = function () {
  let films;

  if (localStorage.getItem("films") === null) {
    //boş array oluturduk
    films = [];
  } else // local storage sadece string değer alır jsoon ile array yapıyoruz
  {
    films = JSON.parse(localStorage.getItem("films")); // array yaptık
  }

  return films;
};
