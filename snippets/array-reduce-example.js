const input = [
  [1, 2, 3],
  [5, 5],
];

const result = input.map(
  (record) => record.reduce((prev, item) => prev + item) / record.length
);

console.log(result);
