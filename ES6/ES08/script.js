// Spread Operator

const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

const combined = [...primeiro, 'a', ...segundo, 'b'];

// também tem como combinar objetos

const first = {name: "Joao"};
const second = {job: "Instructor"};

const combinedObj = {id: 1, ...first, location: "US", ...second}
console.log(combinedObj);