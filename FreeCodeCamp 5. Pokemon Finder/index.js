const userInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results-div');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

function searchPokemon() {
  if (Number.isInteger(userInput.value) == false) {
    const pokemon = userInput.value 
  }

  const response = fetch(
    `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`
  );
  const data = response.json();
}