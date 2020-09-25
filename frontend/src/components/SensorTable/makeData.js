import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const newSensor = () => {
  const reading = getRndInteger(10, 55);
  return {
    time: namor.generate({ words: 1, numbers: 1 }),
    reading,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newSensor(),
      };
    });
  };

  return makeDataLevel();
}
