const obj1 = {
    person : "Thymes",
    weight : 22
}
//const obj2 = obj1;
//const obj2 =Object.assign({},obj1)
const obj2 = {...obj1};
obj2.weight = 23;
console.log(obj1);
console.log(obj2);