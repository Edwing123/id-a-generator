const random = (from,to) => Math.floor(Math.random() *(to-from) + from);
idGenerator = length => {
  const keys = [
    [
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
    ],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];
  let id = "";
  for (let i = 0; i < length; i++) {
        const keyList = keys[random(0,2)];
        id += keyList[random(0, keyList.length)];
  }
  return id;
};
module.exports = idGenerator;