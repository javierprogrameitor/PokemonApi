let elementImage = document.getElementById("imagenPKM");
let elementName = document.getElementById("name");
let elmentId = document.getElementById("id");

    function getPokemonRamdom() {
      let numberAle = Math.floor(Math.random() * 898) + 1; // Full Pokemon list: https://pokemondb.net/pokedex/all
      let pokemonAPI = `https://pokeapi.co/api/v2/pokemon/${numberAle}`;

      fetch(pokemonAPI)
        .then(response => response.json())
        .then(data => {
         elementImage.src = data.sprites.front_default;
         elementName.innerHTML = data.name;
         elmentId.innerHTML = "#" + data.id;
        })
        .catch(error => console.error('Error fetching Pokemon:', error));
    }

    function changePokemon() {
     getPokemonRamdom();
    }

    //Call getRandomPokemon on page load to display a random Pokémon initially.
    window.onload =getPokemonRamdom;
 