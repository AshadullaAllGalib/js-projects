
fetchData();

async function fetchData() {
    
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLocaleLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new error("Could not fetch response");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
}