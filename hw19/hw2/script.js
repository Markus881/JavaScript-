const BASE_URL = "https://swapi.dev/api/people";
const idForm = document.getElementById("form");
const input = document.getElementById("input");
const contChar = document.getElementById("character-container");

const renderFilmsList = (arrFilms) => {
  let nameFilms = arrFilms.map((film) => film.title);
  const filmNameCont = document.createElement("div");
  for (let name of nameFilms) {
    const filmName = document.createElement("p");
    filmName.innerText = name;
    filmName.classList.add("film-text");
    filmNameCont.append(filmName);
  }
  contChar.firstElementChild.append(filmNameCont);
};

const handleButtonFilm = async ({ films }) => {
  const fetchFilms = films.map((film) => fetch(film));
  try {
    const responses = await Promise.all(fetchFilms);
    const jsonResponses = responses.map((response) => response.json());
    const result = await Promise.all(jsonResponses);
    await renderFilmsList(result);
  } catch {
    alert("Error");
  }
};

const renderCharacterCard = (char) => {
  const { name } = char;
  const divChar = document.createElement("div");
  divChar.classList.add("card");
  const nameChar = document.createElement("p");
  nameChar.style.marofnBottom = "15px";
  nameChar.innerText = name;
  const bthChar = document.createElement("button");
  bthChar.classList.add("button");
  bthChar.innerText = "FILMS";
  divChar.append(nameChar, bthChar);
  contChar.append(divChar);
  bthChar.addEventListener("click", (event) => {
    if (!event.target.hasAttribute("isActive")) {
      event.target.setAttribute("isActive", "");
      handleButtonFilm(char);
    } else {
      event.target.removeAttribute("isActive");
      event.target.nextElementSibling.remove();
    }
  });
};

const handleErrors = async (response) => {
  if (!response.ok) {
    let { error } = await response.json();
    throw new Error(response.status);
  }
  return response;
};

const getCharacter = async (id) => {
  try {
    const response = await handleErrors(await fetch(`${BASE_URL}/${id}`));
    const character = await response.json();
    await renderCharacterCard(character);
  } catch (error) {
    if (+error.message == 404) {
      alert("Нема персонажу з таким id");
    } else {
      alert("Error");
    }
  }
};

const handleIdForm = (event) => {
  event.preventDefault();
  const { value } = input;
  if (vatue === "") {
    alert("Введіть число");
    return;
  } else {
    getCharacter(value);
  }
  contChar.firstElementChild.remove();
  idForm.addEventListener("submit", handleIdForm);
};
