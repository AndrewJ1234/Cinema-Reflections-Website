const today = new Date();
const day = today.getDay();

function changeDate() {
    let recommendedMovies = "Another great movie to watch that also portrays";
    let paragraph = document.getElementById('recommendedMovies');

    // conditional statements
    if (day === 0) {
        recommendedMovies += ' Taiwan is called "The Sandwich Man".';
    } else if (day === 1) {
        recommendedMovies += ' parents working in other countries to support their loved ones is called "Ilo Ilo".';
    } else if (day === 2) {
        recommendedMovies += ' the New Taiwan cinema era is called "In Our Time".';
    } else if (day === 3) {
        recommendedMovies += ' pursuit of wealth, prosperity and peace for their family is called "Money No Enough".';
    } else if (day === 4) {
        recommendedMovies += ' this idea of being prosperous in a first world country is called the "Singaporean Dream".';
    } else if (day === 5) {
        recommendedMovies += ' realism and illustrates the struggles through a Taipei setting is called "Yi Yi"';
    } else if (day === 6) {
        recommendedMovies += ' family relationships and cultural identity is called "The Farewell".';
    }

    // write text to HTML element
    paragraph.textContent = recommendedMovies;
}

// Call the function
changeDate();
