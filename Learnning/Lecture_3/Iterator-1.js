let str = "Hello World";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

console.log("\n")

for (let char of "TEST") {
    console.log(char)
}