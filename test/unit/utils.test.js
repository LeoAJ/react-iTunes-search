import {
  capitalize,
  getApiUrl,
  getMedia,
  getKind
} from '../../src/utils';

describe('utils.js', () => {
  test('capitalize should be able to capitalize words', () => {
    const result = 'Abc';
    expect(capitalize('abc')).toMatchSnapshot();
    expect(capitalize('aBc')).toMatchSnapshot();
    expect(capitalize('ABC')).toMatchSnapshot();
  });

  test('getMedia should return proper term for API usage', () => {
    expect(getMedia('TV Show')).toMatchSnapshot();
  });

  test('getApiUrl should return correct API endpoint', () => {
    expect(getApiUrl({
      media: 'music',
      query: 'bsb'
    })).toMatchSnapshot();
  });

  test('getApiUrl should return correct API endpoint without media type', () => {
    expect(getApiUrl({
      query: 'bsb'
    })).toMatchSnapshot();
  });

  test('getKind should return correct format for UI', () => {
    expect(getKind('feature-movie')).toMatchSnapshot();
    expect(getKind('tv')).toMatchSnapshot();
    expect(getKind('song')).toMatchSnapshot();
  });
});
