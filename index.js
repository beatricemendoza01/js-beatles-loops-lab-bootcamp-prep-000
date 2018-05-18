function theBeatlesPlay(musicians, instruments) {
  const array = [];
  
  for (const i = 0; i < musicians.length; i++) {
    const string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  
  return array;
}
