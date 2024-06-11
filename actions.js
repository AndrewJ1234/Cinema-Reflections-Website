// At least two DOM queries

// One of these functions should update page content
// — such as a change to text or images —
// and one of the functions should change a CSS property.



// Retrieve the 'greeting' element
const text = document.getElementById('greeting');

// Function to change text font
function changeTextFont() {
    const textFont = "monospace";
    const color = "yellow";
    document.body.style.color = color;
    document.body.style.fontFamily = textFont;
}

// Function to display random movie facts
function randomMovieInfo() {
    let text;
    const randomInt = Math.floor(Math.random() * 6) + 1;
    switch (randomInt) {
        case 1:
            text = "Jasmine Lee documented the documentary 'Money and Honey'.";
            break;
        case 2:
            text = "'Money and Honey' is a documentary about immigrant workers' struggle between dreams and reality, spanning 13 years of filming in Taiwan and the Philippines.";
            break;
        case 3:
            text = "'Money and Honey' was made in 2011.";
            break;
        case 4:
            text = "'Dust in the Wind' portrays the urbanization of Taiwan in the 1970s, when more and more youngsters left their hometowns to find jobs in the city.";
            break;
        case 5:
            text = "'Dust in the Wind' was made by Hou Hsiao-hsien.";
            break;
        case 6:
            text = "Hou Hsiao-hsien won best cinematography for his movie, 'Dust in the Wind'.";
            break;
        default:
            text = "No movie facts available.";
    }
    // Update the content of the 'factOutput' element
    document.getElementById('factOutput').textContent = text;
}

// Add event listeners to buttons
const btnForText = document.getElementById('changeTextButton');
btnForText.addEventListener('click', changeTextFont);

const btnForFacts = document.getElementById('randomFactsBtn');
btnForFacts.addEventListener('click', randomMovieInfo);
