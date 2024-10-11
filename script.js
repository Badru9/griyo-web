// const wrapper = document.querySelector(".wrapper");

// const showModal = document.getElementById("box");

// wrapper.addEventListener("click", () => {
//   // alert("selamat biodata kamu sudah ada!");

//   showModal.style.display === "none"
//     ? (showModal.style.display = "block")
//     : (showModal.style.display = "none");
// });

const url = 'https://pokeapi.co/api/v2/pokemon';

let pokemons = [];

const getPokemon = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  pokemons.length < 1 ? pokemons.push(data.results) : null;
};

function learnMore() {
  getPokemon();

  console.log(pokemons);
}
