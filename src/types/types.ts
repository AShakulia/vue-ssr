export type SearchStore = {
  searchQuery: string,
  searchResults: SearchResult[],
  isNotFound: boolean,
  isLoading: boolean
}

export type SearchResult = {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: [string, string, string, string];
}