
function* generateEven(start) {
  if (start % 2 !== 0) start--;

  while (start < Number.MAX_VALUE) {
    start += start;
    console.log(generateRandomText(), " : ", start);
    yield start;
  }
}

function generateRandomText() {
  const characters = 'ABCZabcdef ghij klmno pqr stuv wxyz ';
  const minLength = 15;
  const maxLength = 25;
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}




const evenGenerator = generateEven(78775758859);



setInterval(() => evenGenerator.next(), 100)
