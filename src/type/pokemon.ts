export interface IPokemon {
  name: string;
  url: string;
}

export interface CardData {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: { name: string; url: string };
  sprites: any;
  stats: any[];
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
}

export interface SpeciesData {
  base_happiness: number;
  capture_rate: number;
  color: { name: string; url: string };
  egg_groups: { name: string; url: string }[];
  evolution_chain: { url: string };
  evolves_from_species: any;
  flavor_text_entries: { flavor_text: string }[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: { genus: string; language: { name: string; url: string } }[];
  generation: { name: string; url: string };
  growth_rate: { name: string; url: string };
  habitat: { name: string; url: string };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: { language: string; name: string }[];
  order: number;
  pal_park_encounters: { area: any; base_score: number; rate: number }[];
  pokedex_numbers: any[];
  shape: { name: string; url: string };
  varieties: { is_default: boolean; pokemon: any }[];
}
