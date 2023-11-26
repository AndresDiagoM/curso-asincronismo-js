const series_url = 'https://moviesdatabase.p.rapidapi.com/titles?list=most_pop_series&year=2020';

const series_options =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ca34633b8msh94f9380cc7d4be5p1d8ca5jsn45eafc25a7a2',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
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

// fetchData();

// SERIES CONTAINER FETCH AND RENDER    
const seriesCarouselIndicators = document.querySelector('.series-indicators'); 
const seriesList = document.querySelector('.series-inner');
(async () => {
    let data = await fetchData(series_url, series_options);
    // console.log(data);
    // data.map(movie => {
    //     console.log(movie.details.itemSummary.boxArt.url);
    // });
    //IF a movie doesn't have a primaryImage, remove it from the array
    data.results = data.results.filter(movie => movie?.primaryImage?.url);
    let indicatorsTemplate = `
        ${data.results.map((movie, index) => `
            <button type="button" data-bs-target="#seriesCarousel" 
            data-bs-slide-to="${index}" aria-current="${index === 0 ? 'true' : ''}" 
            class="${index === 0 ? 'active' : ''}"
            aria-label="Slide ${index + 1}"></button>
        `).join('')}
    `;
    seriesCarouselIndicators.innerHTML = indicatorsTemplate;

    let seriesTemplate = `
        ${data.results.map((series, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}" bis_skin_checked="1">
                <img class="img-fluid mx-auto d-block" 
                    src="${series?.primaryImage?.url ?? ''}" alt="${series.titleText.text}">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${series.titleText.text}</h5>
                    <p>${series.releaseYear.year}</p>
                </div> 
            </div>
        `).join('')}
    `;
    seriesList.innerHTML = seriesTemplate;
})();

