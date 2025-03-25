const kvarray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

const reformatterdArray = kvarray.map(({ key, value }) => ({ [key]: value}));

console.log(reformatterdArray);
console.log(kvarray);