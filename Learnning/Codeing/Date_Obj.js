const start = Date.now();
console.log("Starting timer...");

setTimeout(() => {
    const millis =Date.now() - start;

    console.log(`second elapsed = ${Math.floor(millis / 1000)}`)
} , 5000)