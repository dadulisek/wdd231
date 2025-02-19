// async function fetchMembers() {
//     const response = await fetch('data/places.json');
//     const members = await response.json();
//     return members;
// }

// const locationsData = fetchMembers()
// const locationsContainer = document.getElementById('locationsContainer');

// locationsData.forEach(location => {
//     const card = document.createElement('div');
//     card.classList.add('card');

//     card.innerHTML = `
//         <h2>${location.name}</h2>
//         <p><strong>Region:</strong> ${location.region}</p>
//         <p><strong>Game:</strong> ${location.game.join(', ')}</p>
//         <p><strong>Type:</strong> ${location.type}</p>
//     `;

//     locationsContainer.appendChild(card);
// });

async function fetchMembers() {
    try {
        const response = await fetch('data/places.json');
        if (!response.ok) { // Check for HTTP errors (404, 500, etc.)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const members = await response.json();
        return members;
    } catch (error) {
        console.error("Error fetching or parsing JSON:", error);
        return []; // Important: Return an empty array to avoid further errors
    }
}

async function displayLocations(locations) { // Correct: Accepts a 'locations' argument
    const locationsContainer = document.getElementById('locationsContainer');

    if (!locationsContainer) {
        console.error("locationsContainer element not found!");
        return;
    }

    locationsContainer.innerHTML = ''; // Clear previous cards! (Crucial)

    if (locations.length === 0) { // Check the 'locations' argument
        const message = document.createElement('p');
        message.textContent = "No locations found.";
        locationsContainer.appendChild(message);
        return;
    }

    locations.forEach(location => { // Use the 'locations' argument
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${location.name}</h2>
            <p><strong>Region:</strong> ${location.region}</p>
            <p><strong>Game:</strong> ${location.game.join(', ')}</p>
            <p><strong>Type:</strong> ${location.type}</p>
        `;

        locationsContainer.appendChild(card);
    });
}

async function init() {
    const locationsData = await fetchMembers();

    // Initial display of all locations
    displayLocations(locationsData);

    // Filter buttons
    const showAllButton = document.getElementById('showAllButton');
    const sasauButton = document.getElementById('sasauButton');
    const troskyButton = document.getElementById('troskyButton');
    const kuttenbergButton = document.getElementById('kuttenbergButton');

    showAllButton.addEventListener('click', () => {
        displayLocations(locationsData); // Show ALL data
    });

    sasauButton.addEventListener('click', () => {
        const filteredLocations = locationsData.filter(location => location.region === 'Sasau');
        displayLocations(filteredLocations); // Show FILTERED data
    });

    troskyButton.addEventListener('click', () => {
        const filteredLocations = locationsData.filter(location => location.region === 'Trosky');
        displayLocations(filteredLocations); // Show FILTERED data
    });

    kuttenbergButton.addEventListener('click', () => {
        const filteredLocations = locationsData.filter(location => location.region === 'Kuttenberg');
        displayLocations(filteredLocations); // Show FILTERED data
    });
}

document.addEventListener('DOMContentLoaded', init);

// Call the async function to display the locations
// displayLocations();