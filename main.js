window.addEventListener('DOMContentLoaded', () => {

    const API_KEY = "salamalekum"
    const grid = document.getElementById("grid");

    const createNewsCard = (title, desc, image, link) => {
        // Create the elements
        const gridItem = document.createElement('div');
        gridItem.className = 'grid__item';

        const card = document.createElement('div');
        card.className = 'card';

        const cardImg = document.createElement('img');
        cardImg.className = 'card__img';
        cardImg.src = image;
        cardImg.alt = title;

        const cardContent = document.createElement('div');
        cardContent.className = 'card__content';

        const cardHeader = document.createElement('h1');
        cardHeader.className = 'card__header';
        cardHeader.textContent = title;

        const cardText = document.createElement('p');
        cardText.className = 'card__text';
        cardText.textContent = desc;

        const cardBtn = document.createElement('a');
        cardBtn.className = 'card__btn';
        cardBtn.href = link;
        cardBtn.textContent = 'Explore';

        const span = document.createElement('span');
        span.innerHTML = '&rarr;';

        // Append the elements to each other
        cardContent.appendChild(cardHeader);
        cardContent.appendChild(cardText);
        cardContent.appendChild(cardBtn);

        card.appendChild(cardImg);
        card.appendChild(cardContent);

        gridItem.appendChild(card);

        return gridItem;
    }

});