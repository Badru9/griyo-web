// const wrapper = document.querySelector(".wrapper");

// const showModal = document.getElementById("box");

// wrapper.addEventListener("click", () => {
//   // alert("selamat biodata kamu sudah ada!");

//   showModal.style.display === "none"
//     ? (showModal.style.display = "block")
//     : (showModal.style.display = "none");
// });

const tableBody = document.querySelector(".table-body");

const url = "https://pokeapi.co/api/v2/pokemon";

let pokemons = [];

const getPokemon = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  pokemons.length < 1 ? pokemons.push(data.results) : null;
};

const dataMahasiswa = [
  {
    id: 1,
    nama: "Mohammad Badrujaman",
    nim: "2206169",
  },
  {
    id: 2,
    nama: "Dzulkifli",
    nim: "2206128",
  },
  {
    id: 3,
    nama: "Irpan",
    nim: "2206120",
  },
];

async function getDataMahasiswa() {
  dataMahasiswa.forEach((item, index) => {
    tableBody.insertAdjacentHTML(
      "beforeend",

      `<tr key='${index}'>
        <td>${item.id}</td>
        <td>${item.nama}</td>
        <td>${item.nim}</td>
      </tr>`
    );
  });
}

function learnMore() {
  // getPokemon();

  getDataMahasiswa();

  console.log(tableBody);

  console.log(pokemons);
}
