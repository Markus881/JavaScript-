class Board {
    constructor () {
        this.submitForm();
        this.renderContainerForCards();
        this.renderCardsFromLocalStorage();
    }

    submitForm() {        
        const convertFormDataToObject = (formData) => {
            const formValues = {};
            for (let pair of formData.entries()) {
              formValues[pair[0]] = pair[1];
            }
            return formValues;
        }        
        
        const handleFormSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const { input: enteredId, select: enteredRequestType } = convertFormDataToObject(formData);
            this.enteredRequestType = enteredRequestType;
            this.enteredId = enteredId;
            event.target.reset();
            if (enteredId) {
                const request = new ApiRequest({
                    enteredRequestType: this.enteredRequestType,
                    enteredId: this.enteredId,
                });
            } else {
                alert('Please enter id!')
            }
        }
        const form = document.getElementById('swapi-board-form');
        form.addEventListener('submit', handleFormSubmit);
    }

    renderContainerForCards() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('swapi-board__card-container');
        cardContainer.id = 'swapi-card-container';
        document.getElementById('swapi-board-container').append(cardContainer);
    }

    renderCardsFromLocalStorage() {
        for (let i = 1; i < localStorage.length; i++) {
            let currentKey = localStorage.key(i);
            let dataRequest = JSON.parse(localStorage.getItem(currentKey));
            let cardId = currentKey.slice(7);
                const requestFromLocalStorage = new ApiRequest({
                    enteredRequestType: dataRequest.requestType,
                    enteredId: dataRequest.id,
                    isSaveInLocalStorage: false, 
                    cardIdFromLocalStorage: cardId, 
                });
        }
        
    }
}

class ApiRequest {
    constructor (options) {
        const { enteredRequestType, enteredId, isSaveInLocalStorage = true, cardIdFromLocalStorage = null } = options;
       this.enteredRequestType = enteredRequestType;
       this.enteredId = enteredId;
       this.isSaveInLocalStorage = isSaveInLocalStorage;
       this.cardIdFromLocalStorage = cardIdFromLocalStorage;
       this.getData();
    }
    getData = async () => {
        try {
            this.showPreloader(true);
            const buttonAdd = document.getElementById('swapi-board-button');
            buttonAdd.setAttribute('disabled', '');
            const responseRequest = await fetch(`https://swapi.dev/api/${this.enteredRequestType}/${this.enteredId}/`);
            if (responseRequest.ok) {
                const resultRequest = await responseRequest.json();
                this.resultRequest = resultRequest;
                this.showPreloader(false);
                buttonAdd.removeAttribute('disabled');
                switch (this.enteredRequestType) {
                    case 'starships':
                        const renderStarshipCard = new StarshipCard({
                            resultRequest: this.resultRequest,
                            cardIdFromLocalStorage: this.cardIdFromLocalStorage,
                        });
                        if (this.isSaveInLocalStorage) {
                            renderStarshipCard.addCardToLocalStorage({
                                enteredRequestType: this.enteredRequestType,
                                enteredId: this.enteredId,
                            });
                        }
                        renderStarshipCard.render(); //рендерим карту
                        break;
                    case 'vehicles':
                        const renderVehicleCard = new StarshipCard({
                            resultRequest: this.resultRequest,
                            cardIdFromLocalStorage: this.cardIdFromLocalStorage,
                        });
                        if (this.isSaveInLocalStorage) {
                            renderVehicleCard.addCardToLocalStorage({
                                enteredRequestType: this.enteredRequestType,
                                enteredId: this.enteredId,
                            });
                        }
                        renderVehicleCard.render(this.cardIdFromLocalStorage);
                        break;
                    case 'planets':
                        const renderPlanetCard = new StarshipCard({
                            resultRequest: this.resultRequest,
                            cardIdFromLocalStorage: this.cardIdFromLocalStorage,
                        });
                        if (this.isSaveInLocalStorage) {
                            renderPlanetCard.addCardToLocalStorage({
                                enteredRequestType: this.enteredRequestType,
                                enteredId: this.enteredId,
                            });
                        }
                        renderPlanetCard.render(this.cardIdFromLocalStorage);
                        break;
                    default:
                        alert ('You entered the wrong type of operation. Please enter it correctly.');
                        break;
                }
            } else if (responseRequest.status === 404) {
                this.showPreloader(false);
                buttonAdd.removeAttribute('disabled');
                alert (`Element with the entered 'id' does not exist!`);
            } else {
                this.showPreloader(false);
                buttonAdd.removeAttribute('disabled');
                throw new Error(`There was an error code ${responseRequest.status}`);
            }
        } catch (error) {
            this.showPreloader(false);
            document.getElementById('swapi-board-button').removeAttribute('disabled');
            throw new Error(error.message);
        }
    }

    showPreloader (show) {
        if (show) {
          document.getElementById('preloader').style.display = 'block';
        } else {
            document.getElementById('preloader').style.display = 'none';
        }
    }
}

class Card {    
    constructor (options) {
        const { resultRequest, cardIdFromLocalStorage} = options;
        this.resultRequest = resultRequest;
        this.cardName = resultRequest.name;
        this.cardIdFromLocalStorage = cardIdFromLocalStorage;
    }

    render () {
        this.cardWrapper = document.createElement('div');
        this.cardWrapper.classList.add('swapi-board__card-wrapper');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('swapi-board_card-title');
        cardTitle.innerText = this.cardName;

        const cardClose = document.createElement('span');
        cardClose.classList.add('swapi-board_card-close');
        cardClose.innerText = 'X';
        this.cardWrapper.append(cardTitle, cardClose);

        this.cardWrapper.id = localStorage.getItem('currentCardNumber');
        
        if (this.cardIdFromLocalStorage) {
            this.cardWrapper.id = this.cardIdFromLocalStorage; 
        }
        
        cardClose.addEventListener('click', () => {
            this.cardWrapper.remove();
            localStorage.removeItem(`Card № ${this.cardWrapper.id}`);
            if (localStorage.length <= 1) {
                localStorage.setItem('currentCardNumber', 0);
            }
        });
    }

    createCardSpecifications (numberOfCopies, ...specification) {
        for (let i = 0; i < numberOfCopies; i++) {
            const cardSpecification = document.createElement('p');
            cardSpecification.classList.add('swapi-board__card-text');
            cardSpecification.innerText = specification[i];
            this.cardWrapper.append(cardSpecification);
        }

        document.getElementById('swapi-card-container').append(this.cardWrapper);
    }

    addCardToLocalStorage (options) {
        const { enteredRequestType, enteredId } = options;
        const dataRequestToLocalStorage = {};
        dataRequestToLocalStorage.requestType = enteredRequestType;
        dataRequestToLocalStorage.id = enteredId;
        const dataRequestToLocalStorageJson = JSON.stringify(dataRequestToLocalStorage);
        const currentCardNumberKey = 'currentCardNumber';
        let currentCardNumber = localStorage.getItem(currentCardNumberKey);
        
        if (localStorage.getItem(currentCardNumberKey) && currentCardNumber >= 0) {
            currentCardNumber = +currentCardNumber + 1;
            localStorage.setItem(currentCardNumberKey, currentCardNumber);
            localStorage.setItem(`Card № ${currentCardNumber}`, dataRequestToLocalStorageJson);
             
        } else {
            currentCardNumber = 0;
            localStorage.setItem(currentCardNumberKey, currentCardNumber);
            localStorage.setItem(`Card № ${currentCardNumber}`, dataRequestToLocalStorageJson);
        }
    }
}

class StarshipCard extends Card {
    render() {
        super.render();
        this.createCardSpecifications(3, `Model: ${this.resultRequest.model}`, `Manufacturer: ${this.resultRequest.manufacturer}`,
        `Max atmosphering speed: ${this.resultRequest.max_atmosphering_speed}`);
    }
}

class VehicleCard extends Card {
    render() {
        super.render();
        this.createCardSpecifications(3, `Cost in credits: ${this.resultRequest.cost_in_credits}`, `Crew: ${this.resultRequest.crew}`,
        `Passengers: ${this.resultRequest.passengers}`);
    }
}

class PlanetCard extends Card {
    render() {
        super.render();
        this.createCardSpecifications(3, `Climate: ${this.resultRequest.climate}`, `Terrain: ${this.resultRequest.terrain}`,
        `Population: ${this.resultRequest.population}`);
    }
}

const board = new Board();