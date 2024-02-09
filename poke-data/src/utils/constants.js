export const GYMS = [
  {
    number: 1,
    leader: "Falkner",
    city: "Violet City",
    specialty: "Flying",
    badge: "Zephyr",
    team: ["pidgey", "pidgeotto"],
    rewards: {
      payout: 900,
      machine: "TM31 - Mud Slap",
    },
  },
  {
    number: 2,
    leader: "Bugsy",
    city: "Azalea Town",
    specialty: "Bug",
    badge: "Insect",
    team: ["metapod", "kakuna", "scyther"],
    rewards: {
      payout: 1600,
      machine: "TM49 - Fury Cutter",
    },
  },
  {
    number: 3,
    leader: "Whitney",
    city: "Goldenrod City",
    specialty: "Normal",
    badge: "Plain",
    team: ["clefairy", "miltank"],
    rewards: {
      payout: 2000,
      machine: "TM45 - Attract",
    },
  },
  {
    number: 4,
    leader: "Morty",
    city: "Ecruteak City",
    specialty: "Ghost",
    badge: "Fog",
    team: ["gastly", "haunter", "haunter", "gengar"],
    rewards: {
      payout: 2300,
      machine: "TM34 - Shadow Ball",
    },
  },
  {
    number: 5,
    leader: "Chuck",
    city: "Cianwood City",
    specialty: "Fighting",
    badge: "Storm",
    team: ["primeape", "poliwrath"],
    rewards: {
      payout: 3000,
      machine: "TM01 - Dynamic Punch",
    },
  },
  {
    number: 6,
    leader: "Jasmine",
    city: "Olivine City",
    specialty: "Steel",
    badge: "Mineral",
    team: ["magnemite", "magnemite", "steelix"],
    rewards: {
      payout: 3500,
      machine: "TM23 - Iron Tail",
    },
  },
  {
    number: 7,
    leader: "Pryce",
    city: "Mahogany Town",
    specialty: "Ice",
    badge: "Glacier",
    team: ["seel", "dewgong", "piloswine"],
    rewards: {
      payout: 3100,
      machine: "TM16 - Icy Wind",
    },
  },
  {
    number: 8,
    leader: "Clair",
    city: "Blackthorn City",
    specialty: "Dragon",
    badge: "Rising",
    team: ["dragonair", "dragonair", "dragonair", "kingdra"],
    rewards: {
      payout: 4000,
      machine: "TM24 - Dragons Breath",
    },
  },
];

export const GYMPOKEMON = [
  {
    key: 1,
    name: "pidgey",
    leader: "Falkner",
    level: 7,
    attacks: ["tackle", "mud-slap"],
    types: ["normal", "flying"],
  },
  {
    key: 2,
    name: "pidgeotto",
    leader: "Falkner",
    level: 9,
    attacks: ["tackle", "mud-slap", "gust"],
    types: ["normal", "flying"],
  },
  {
    key: 3,
    name: "metapod",
    leader: "Bugsy",
    level: 14,
    attacks: ["tackle", "string shot", "harden"],
    types: ["bug"],
  },
  {
    key: 4,
    name: "kakuna",
    leader: "Bugsy",
    level: 14,
    attacks: ["poison sting", "string shot", "harden"],
    types: ["bug", "poison"],
  },
  {
    key: 5,
    name: "scyther",
    leader: "Bugsy",
    level: 16,
    attacks: ["quick attack", "leer", "fury cutter"],
    types: ["bug", "flying"],
  },
  {
    key: 6,
    name: "clefairy",
    leader: "Whitney",
    level: 18,
    attacks: ["doubleslap", "mimic", "encore", "metronome"],
    types: ["normal"],
  },
  {
    key: 7,
    name: "miltank",
    leader: "Whitney",
    level: 20,
    attacks: ["rollout", "attract", "stomp", "milk drink"],
    types: ["normal"],
  },
  {
    key: 8,
    name: "gastly",
    leader: "Morty",
    level: 21,
    attacks: ["lick", "spite", "mean look", "curse"],
    types: ["ghost", "poison"],
  },
  {
    key: 9,
    name: "haunter",
    leader: "Morty",
    level: 21,
    attacks: ["hypnosis", "mimic", "curse", "night shade"],
    types: ["ghost", "poison"],
  },
  {
    key: 10,
    name: "haunter",
    leader: "Morty",
    level: 23,
    attacks: ["spite", "mean look", "mimic", "night shade"],
    types: ["ghost", "poison"],
  },
  {
    key: 11,
    name: "gengar",
    leader: "Morty",
    level: 25,
    attacks: ["hypnosis", "shadow ball", "mean look", "dream eater"],
    types: ["ghost", "poison"],
  },
  {
    key: 12,
    name: "primeape",
    leader: "Chuck",
    level: 27,
    attacks: ["leer", "rage", "karate chop", "fury swipes"],
    types: ["fight"],
  },
  {
    key: 13,
    name: "poliwrath",
    leader: "Chuck",
    level: 30,
    attacks: ["hypnosis,", "mind reader,", "surf,", "dynamicpunch"],
    types: ["fight", "water"],
  },
  {
    key: 14,
    name: "magnemite",
    leader: "Jasmine",
    level: 30,
    attacks: ["thunderbolt", "supersonic", "sonicboom", "thunder wave"],
    types: ["electric", "steel"],
  },
  {
    key: 15,
    name: "magnemite",
    leader: "Jasmine",
    level: 30,
    attacks: ["thunderbolt", "supersonic", "sonicboom", "thunder wave"],
    types: ["electric", "steel"],
  },
  {
    key: 16,
    name: "steelix",
    leader: "Jasmine",
    level: 35,
    attacks: ["screech", "sunny day", "rock throw", "iron tail"],
    types: ["ground", "steel"],
  },
  {
    key: 17,
    name: "seel",
    leader: "Pryce",
    level: 27,
    attacks: ["headbutt", "icy wind", "aurora beam", "rest"],
    types: ["water"],
  },
  {
    key: 18,
    name: "dewgong",
    leader: "Pryce",
    level: 29,
    attacks: ["headbutt", "icy wind", "aurora beam", "rest"],
    types: ["water", "ice"],
  },
  {
    key: 19,
    name: "piloswine",
    leader: "Pryce",
    level: 31,
    attacks: ["icy wind", "fury attack", "mist", "blizzard"],
    types: ["ice", "ground"],
  },
  {
    key: 20,
    name: "dragonair",
    leader: "Claire",
    level: 37,
    attacks: ["thunder wave", "surf", "slam", "dragonbreath"],
    types: ["dragon"],
  },
  {
    key: 21,
    name: "dragonair",
    leader: "Claire",
    level: 37,
    attacks: ["thunder wave", "thunderbolt", "slam", "dragonbreath"],
    types: ["dragon"],
  },
  {
    key: 22,
    name: "dragonair",
    leader: "Claire",
    level: 37,
    attacks: ["thunder wave", "ice beam", "slam", "dragonbreath"],
    types: ["dragon"],
  },
  {
    key: 23,
    name: "kingdra",
    leader: "Claire",
    level: 40,
    attacks: ["smokescreen", "surf", "hyper beam", "dragonbreath"],
    types: ["water", "dragon"],
  },
];
