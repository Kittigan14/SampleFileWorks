function getBudgets(arr) {
    const totalBudget = arr.reduce((sum, person) => sum + person.budget, 0);

    return console.log(totalBudget);
}

getBudgets([
    { name: "John"  , age: 21, budget: 23000 },
    { name: "Steve" , age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]); // Output: 65700

getBudgets([
    { name: "John"  , age: 21, budget: 29000 },
    { name: "Steve" , age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]); // Output: 62600
