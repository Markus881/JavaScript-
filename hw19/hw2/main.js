const SWAPI_URL = "https://swapi.dev/api";

const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.getElementById('input');
const submitButton = document.getElementById('btn-submit');
const errorMessage = document.getElementById('error_message')
const preloader = document.getElementById("preloader");

const showPreloader = (show) => {
    if (show) {
        preloader.style.display = "block";
    } else {
        preloader.style.display = "none";
    }
};

// Отправка запроса на получение персонажа
const handleSubmit = (event) => {
    event.preventDefault();

    const charId = Number(input.value);
    errorMessage.innerText = "";

    if (charId < 1 || charId > 82 || !charId) {
        errorMessage.innerText = "Некорректное значение!";
        input.value = "";
        return
    }
    getCharacter(charId);
    submitButton.setAttribute("disabled", ""); // Исключаем повторное нажатие кнопки до рендерига списка фильмов
    submitButton.classList.remove("btn-submit");
}
form.addEventListener("submit", handleSubmit);

// Получение персонажа
const getCharacter = async (Id) => {

    showPreloader(true);

    try {
        const response = await fetch(`${SWAPI_URL}/people/${Id}`);
        if (response.status === 200 || response.status === 201) {
            const charInfo = await response.json();
            const { name: char_name, films: char_films } = charInfo;

            renderCharCard(char_name, char_films);
            showPreloader(false);
            input.value = ""
        } else {
            throw new Error(`Unable to get character from server. Error status "${response.status}"`)
        }

    } catch (err) {
        let errorText = err.message;
        alert(errorText);
        showPreloader(false);
    }
}

// Рендеринг карточки персонажа
const renderCharCard = (charName, filmsWithChar) => {

    const characterName = document.createElement("h3");
    characterName.innerText = charName;
    characterName.classList.add("character_name");
    container.append(characterName);

    const filmBtn = document.createElement("button");
    filmBtn.innerText = "Фильмы с участием";
    filmBtn.classList.add("films_button");
    container.append(filmBtn);

    filmBtn.addEventListener("click", () => {
        getFilmsList(filmsWithChar);
        filmBtn.setAttribute("disabled", "");
    })
}

// Получение и рендеринг списка фильмов
const getFilmsList = async (urls) => {

    showPreloader(true);

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
            showPreloader(false);
        })

    } catch (err) {
        let errorText = err.message;
        console.log(errorText);
        alert(errorText);
    }
    submitButton.removeAttribute("disabled"); // Разрешаем запрос еще персонажа
    submitButton.classList.add("btn-submit");
}