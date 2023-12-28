const baseUrl = "https://pokeapi.co/api/v2/";

export async function getPokemon() {
  const res = await fetch(`${baseUrl}pokemon/250`);
  return await res.json();
}
