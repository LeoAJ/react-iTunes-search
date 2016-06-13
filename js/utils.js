const capitalize = str => (`${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`);

export function getMedia(str) {
  if (str.indexOf(' ') === -1) {
    return str.toLowerCase();
  }
  const sg = str.split(' ');
  return sg[0] + capitalize(sg[1]);
}

export function getKind(str) {
  if (typeof str !== 'string') {
    return;
  }

  if (str === 'tv') {
    return 'TV';
  } else if (str === 'feature') {
    return '';
  }

  if (str.indexOf('-') === -1) {
    return capitalize(str);
  }
  const sg = str.split('-');
  return `${getKind(sg[0])} ${capitalize(sg[1])}`;
}
