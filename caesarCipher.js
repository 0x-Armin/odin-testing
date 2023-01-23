const caesarCipher = (message) => {
  const offset = 1;
  let encrypt = "";

  for (let char of message) {
    if (char.toUpperCase() == char.toLowerCase()) { // true for non-alphabet
      encrypt += char;
    } else if (char.toUpperCase() == char) {
      encrypt += String.fromCharCode(((char.charCodeAt() + offset - 65) % 26) + 65);
    } else {
      encrypt += String.fromCharCode(((char.charCodeAt() + offset - 97) % 26) + 97);
    }
  }

  return encrypt;
};

export { caesarCipher };