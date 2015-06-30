export function capitalize (str) {
  
  if (typeof str !== 'string') {
    return;
  }

  if (str === 'tv') {
    return 'TV';
  } else if (str === 'feature') {
    return '';
  }

  if (str.indexOf('-') === -1) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  } else {
    let sg = str.split('-');
    return capitalize(sg[0]) + ' ' + capitalize(sg[1]);
  }

};