// const book = new Object({ title : "1984", another: "George Orwell"});
// console.log("\n ----------");
// console.log(typeof book);
// console.log(book);


// const myBooks = [
//     new Object({ title: "1984", auther: "George Orwell"}),
//     new Object({ title: "Becoming", auther: "Michelle Obama"}),
//     new Object({ title: "Snow Crash", auther: "Neal Stephenson"}),
//     new Object({ title: "Predictably Irrational", auther: "Dan Ariely"})
// ];

getBudgets ([
    { name: "John"  , age:21 , budget: 23000 },
    { name: "Steve" , age:32 , budget: 40000 },
    { name: "Martin", age:16 , budget: 2700  }
]);

function getBudgets(data) {
    

    const sum = data.reduce((acc, person) => {
        return acc + person.budget;
    });


    console.log(sum);
}