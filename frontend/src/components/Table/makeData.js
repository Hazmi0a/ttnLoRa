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
  const min = getRndInteger(10, 32);
  const max = getRndInteger(32, 55);
  return {
    name: namor.generate({ words: 1, numbers: 1 }),
    hardware_serial: Math.floor(Math.random() * Math.pow(10, 16)),
    min,
    max,
    avg: getRndInteger(min, max),
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
