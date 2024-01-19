let getBudgets = (data) => {
    let totalBudget = data.reduce((sum , person) => sum + person.budget , 0);
    return console.log(totalBudget);
}


getBudgets([
    { name: "John"  , age: 21, budget: 23000 },
    { name: "Steve" , age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]);