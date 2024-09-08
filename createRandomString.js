const createRandomString = () => {
  const char = "ASDFGH";

  const result = "";
  for (let i = 0; i < 6; i++) {
    result += char.charAt(Math.floor(Math.random() * char.length));
  }
  return result;
};

export default createRandomString;
