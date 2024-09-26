// Task 1: Obtaining API Key and Configuration
const ts = Date.now();
const publicKey = '0d4e958ce6713eb63a3561d0cb643646';
const privateKey = '36f366f5d798773a7bd71d2e9998c1380d959b14';
const hash = md5(ts + privateKey + publicKey);
const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
// Task 2: Fetching Characters Using Fetch API
const fetchMarvelCharacterData = async (characterName) => {
    const response = await fetch(`${apiUrl}&name=${characterName}`);
    const characterData = await response.json();
    // Task 3: Updating User Interface Dynamically
    const characterDataDisplay = characterData.data["results"];
    const characterInfoElement = document.getElementById("character-info");
    characterInfoElement.innerHTML = `
        <ul>
            <li>Name: ${characterDataDisplay[0]["name"]}</li>
            <li>Description: ${characterDataDisplay[0]["description"]}</li>
        </ul>
    `;
};
fetchMarvelCharacterData("thor"); // Enter character name here