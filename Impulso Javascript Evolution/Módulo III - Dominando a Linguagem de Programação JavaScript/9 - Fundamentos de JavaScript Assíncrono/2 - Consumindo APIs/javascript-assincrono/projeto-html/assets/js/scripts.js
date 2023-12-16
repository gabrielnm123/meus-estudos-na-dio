const BASE_URL = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
const CAT_BTN = document.getElementById('change-cat');
const CAT_IMG = document.getElementById('cat');

// const GET_CATS = async () => {
//   try {
//     const DATA = await fetch(BASE_URL);
//     const JSON = await DATA.json();
//     return JSON[0].url;
//   } catch(e) {
//     console.log(e.message);
//   }
// }
const GET_CATS = async () => {
  const DATA = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return DATA[0].url;
}

const LOAD_IMG = async () => {
  CAT_IMG.src = await GET_CATS();
}

CAT_BTN.addEventListener('click', LOAD_IMG);

LOAD_IMG();
