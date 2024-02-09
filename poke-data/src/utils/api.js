const BASEURL = "https://pokeapi.co/api/v2/pokemon/";

export function getPokemon(endpoint) {
  return fetch(`${BASEURL}${endpoint}`).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}
