// PUBLIC APIS  https://publicapis.dev/category/sports-and-fitness

// we are using the moviesdatabase.p.rapidapi.com API 
// https://rapidapi.com/SAdrian/api/moviesdatabase

const url = 'https://moviesdatabase.p.rapidapi.com/titles';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9ca34633b8msh94f9380cc7d4be5p1d8ca5jsn45eafc25a7a2',
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        // add the limit query parameter to the url 
        const response = await fetch(`${url}?limit=10`, options);
        const result = await response.json();
        // console.log(result);
        // console.log(result.results[0]);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
}

// fetchData();

// select html elements
const carouselIndicators = document.querySelector('.carousel-indicators'); 
const moviesList = document.querySelector('.carousel-inner');

(async () => {
    const data = await fetchData();
    // console.table(data.results);
    // data.results.map(movie => {
    //     console.log(movie?.primaryImage?.url ?? null);
    // });
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
                <img class="img-fluid mx-auto d-block" width="300" height="200"
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


