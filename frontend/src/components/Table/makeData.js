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
  return {
    name: namor.generate({ words: 1 }),
    hardware_serial: Math.floor(Math.random() * Math.pow(10, 16)),
    min: getRndInteger(10, 32),
    max: getRndInteger(32, 55),
    avg: getRndInteger(10, 55),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newSensor(),
      };
    });
  };

  return makeDataLevel();
}
