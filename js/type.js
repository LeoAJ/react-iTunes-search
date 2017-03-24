// @flow
/* eslint import/prefer-default-export: 0 */

export type ContainerState = {
  type: 'start' | 'loading' | 'noContent' | 'error',
  response?: Object
};

export type HeaderState = {
  media: string,
  query: string
};

export type SearchResult = {
  trackId: number,
  trackPrice?: number,
  collectionPrice?: number,
  price?: number,
  trackViewUrl?: string,
  collectionViewUrl?: string,
  artworkUrl100: string,
  trackName?: string,
  collectionName?: string,
  kind: string,
  artistName: string,
  longDescription?: string,
  description?: string,
  releaseDate?: string
};
