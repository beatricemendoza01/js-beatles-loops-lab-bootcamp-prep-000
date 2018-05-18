function theBeatlesPlay(musicians, instruments) {
  const array = [];
  
  for (let i = 0; i < musicians.length; i++) {
    let string = `${i} plays ${instruments[i]}`;
    array.push(string);
  }
  
  return array;
}