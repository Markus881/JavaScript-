const SWAPI = "https://swapi.dev/api";

const container = document.getElementById("container");
const form = document.getElementById("form");
const formIn = document.getElementById("formIn");
const submitButton = document.getElementById("btn");
const errMessage = document.getElementById("error");
const preLoader = document.getElementById("preLoader");

const showPreLoader = (show) => {
  if (show) {
    preLoader.style.display = "block";
  } else {
    preLoader.style.display = "none";
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  const charId = Number(formIn.value);
  errMessage.innerText = "";

  if (charId < 1 || charId > 82 || !charId) {
    errMessage.innerText = "Неправильне значення!";
    formIn.value = "";
    return;
  }
  getStats(charId);
  submitButton.setAttribute("disabled", "");
  submitButton.classList.remove("btn");
};
form.addEventListener("submit", handleSubmit);

const getStats = async (Id) => {
  showPreLoader(true);

  try {
    const response = await fetch(`${SWAPI}/people/${Id}`);
    if (response.status === 200 || response.status === 201) {
      const charInfo = await response.json();
      const { name: char_name, films: char_films } = charInfo;

      makeCharCard(char_name, char_films);
      showPreLoader(false);
      formIn.value = "";
    } else {
      throw new Error(
        `Неможливо отримати символ із сервера. Статус помилки '${response.status}'`
      );
    }
  } catch (err) {
    let errorText = err.message;
    alert(errorText);
    showPreLoader(false);
  }
};

const makeCharCard = (charName, filmsWithChar) => {
  const characterName = document.createElement("h3");
  characterName.innerText = charName;
  characterName.classList.add("character_name");
  container.append(characterName);

  const filmBtn = document.createElement("button");
  filmBtn.innerText = "Фільми за участю";
  filmBtn.classList.add("films_button");
  container.append(filmBtn);

  filmBtn.addEventListener("click", () => {
    getFilmsList(filmsWithChar);
    filmBtn.setAttribute("disabled", "");
  });
};

const getFilmsList = async (urls) => {
  showPreLoader(true);

  const requestFilms = urls.map((url) => fetch(url));

  try {
    const responses = await Promise.all(requestFilms);
    const jsonResponses = responses.map((resp) => resp.json());
    const filmsRes = await Promise.all(jsonResponses);

    filmsRes.map((film) => {
      const filmTitle = document.createElement("p");
      filmTitle.classList.add("film_title");
      filmTitle.innerText = film.title;
      container.append(filmTitle);
      showPreLoader(false);
    });
  } catch (err) {
    let errorText = err.message;
    console.log(errorText);
    alert(errorText);
  }
  submitButton.removeAttribute("disabled");
  submitButton.classList.add("btn");
};
