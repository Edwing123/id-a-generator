const random = (from, to) => Math.floor(Math.random() * (to - from) + from);
const idGenerator = (options) => {
  // DEAFULT
  options.preId = options.preId ? options.preId : "";
  options.postId = options.postId ? options.postId : "";
  // ERRORS
  // valid length
  if (!options.length || options.length <= 0 || isNaN(options.length))
    throw new Error("specify a valid length");
  // at least one specified keyset
  if (!Object.values(options).includes(true))
    throw new Error(
      "you should specify at least one key set to generate an ID"
    );
  // KEYSETS
  const lowercase = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  const uppercase = lowercase.map((el) => el.toUpperCase());
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keySets = [];
  // push specified keys to the array
  if (options.lowercase) keySets.push(lowercase);
  if (options.uppercase) keySets.push(uppercase);
  if (options.numbers) keySets.push(numbers);
  // GENERATE
  let id = `${options.preId}`;
  for (let i = 0; i < options.length; i++) {
    const keys = keySets[random(0, keySets.length)];
    id += keys[random(0, keys.length)];
  }
  id = `${id}${options.postId}`;
  return id;
};
module.exports = idGenerator;
