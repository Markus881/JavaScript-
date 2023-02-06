const mainContainer = document.getElementById("container");
const preloader = document.getElementById("preloader");
const countryElement = document.getElementById("country");
const capitalElement = document.getElementById("capital");
const currencyElement = document.getElementById("currency");
const bannerImg = document.getElementById("flag");

const MAIN_URL = "https://ipapi.co/json";
const BANNER = "https://restcountries.com/v2/name";


const showPreloader = (show) => {
    if (show) {
        preloader.style.display = "block";
    } else {
        preloader.style.display = "none";
    }
};

const getCountry = async (url) => {

    showPreloader(true);

    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const countryRes = await response.json();
            const { country_name: country, country_capital: capital, currency } = countryRes;

            getCountryFlag(BANNER, country);
            createCountryCard(country, capital, currency);
        } else {
            throw new Error(`Сталася помилка. Статус помилки ${response.status}`)
        }
    } catch (err) {
        let errorText = err.message
        alert(errorText)
    }

}
getCountry(MAIN_URL)


const getCountryFlag = async (url, countryName) => {

    try {
        const response = await fetch(`${BANNER}/${countryName}`);
        if (response.status === 200) {
            const flag = await response.json();
            renderFlag(flag[0].flag);
        } else {
            throw new Error(`Сталася помилка. Статус помилки ${response.status}`)
        }
    } catch (err) {
        let errorText = err.message
        alert(errorText)
    }
}

const renderFlag = (flag) => {
    bannerImg.setAttribute('src', flag);
}

const createCountryCard = (country_name, country_capital, currency) => {
    countryElement.innerText = country_name;
    capitalElement.innerText = country_capital;
    currencyElement.innerText = currency;

    showPreloader(false);
};