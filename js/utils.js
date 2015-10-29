function capitalize(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

export function getMedia(str) {
  if (str.indexOf(' ') === -1) {
    return str.toLowerCase();
  } else {
    const sg = str.split(' ');
    return sg[0] + capitalize(sg[1]);
  }
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
  } else {
    const sg = str.split('-');
    return getKind(sg[0]) + ' ' + capitalize(sg[1]);
  }
}
