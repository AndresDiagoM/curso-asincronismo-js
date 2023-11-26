// PUBLIC APIS  https://publicapis.dev/category/sports-and-fitness

// we are using the moviesdatabase.p.rapidapi.com API 
// https://rapidapi.com/SAdrian/api/moviesdatabase

// const url = 'https://moviesdatabase.p.rapidapi.com/titles';
// const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?limit=10&list=most_pop_series';
const movies_url = 'https://moviesdatabase.p.rapidapi.com/titles';

const movies_options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9ca34633b8msh94f9380cc7d4be5p1d8ca5jsn45eafc25a7a2',
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
    }
};

async function fetchData(url, options) {
    try {
        // add the limit query parameter to the url 
        // const response = await fetch(`${url}?limit=10`, options);
        const response = await fetch(`${url}`, options);
        const result = await response.json();
        // console.log(result);
        // console.log(result.results[0]);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
}

// MOVIES CONTAINER FETCH AND RENDER
const carouselIndicators = document.querySelector('.carousel-indicators'); 
const moviesList = document.querySelector('.carousel-inner');
(async () => {
    let data = await fetchData(`${movies_url}?year=2023&limit=12`, movies_options);
    // console.table(data.results);
    // data.results.map(movie => {
    //     console.log(movie?.primaryImage?.url ?? null);
    // });
    //IF a movie doesn't have a primaryImage, remove it from the array
    data.results = data.results.filter(movie => movie?.primaryImage?.url);
    let indicatorsTemplate = `
        ${data.results.map((movie, index) => `
            <button type="button" data-bs-target="#carouselExampleCaptions" 
            data-bs-slide-to="${index}" aria-current="${index === 0 ? 'true' : ''}" 
            class="${index === 0 ? 'active' : ''}"
            aria-label="Slide ${index + 1}"></button>
        `).join('')}
    `;
    carouselIndicators.innerHTML = indicatorsTemplate;

    let movieTemplate = `
        ${data.results.map((movie, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}" bis_skin_checked="1">
                <img class="img-fluid mx-auto d-block" 
                    src="${movie?.primaryImage?.url ?? ''}" alt="${movie.titleText.text}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${movie.titleText.text}</h5>
                    <p>${movie.releaseYear.year}</p>
                </div> 
            </div>
        `).join('')}
    `;
    moviesList.innerHTML = movieTemplate;
})();

// SEARCH FORM
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // if the search input is empty, redirect to the home page
    if (searchInput.value === '') {
        window.location.href = './index.html';
    }
    
    // console.log(searchInput.value);
    let url = `${movies_url}/search/title/${searchInput.value}?exact=false&titleType=movie&limit=10`;
    let data = await fetchData(url, movies_options);
    // console.log(data);
    // console.log(data.results[0]);
    data.results = data.results.filter(movie => movie?.primaryImage?.url);

    // change title 
    document.querySelector('.movies-title').innerHTML = `Search results for "${searchInput.value}", results: ${data.results.length}`;

    let indicatorsTemplate = `
        ${data.results.map((movie, index) => `
            <button type="button" data-bs-target="#carouselExampleCaptions" 
            data-bs-slide-to="${index}" aria-current="${index === 0 ? 'true' : ''}" 
            class="${index === 0 ? 'active' : ''}"
            aria-label="Slide ${index + 1}"></button>
        `).join('')}
    `;
    carouselIndicators.innerHTML = indicatorsTemplate;

    let movieTemplate = `
        ${data.results.map((movie, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}" bis_skin_checked="1">
                <img class="img-fluid mx-auto d-block" 
                    src="${movie?.primaryImage?.url ?? ''}" alt="${movie.titleText.text}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${movie.titleText.text}</h5>
                    <p>${movie.releaseYear.year}</p>
                </div> 
            </div>
        `).join('')}
    `;
    moviesList.innerHTML = movieTemplate;
});

