const cat = {
    name : "Thyme",
    age : 8 , 
    whatName(){
        return this.name ; 
    },
    whatage(){
        return this.age ; 
    },
}

console.log(cat.whatName());
cat.name = "Bank"
console.log(cat.whatName());
console.log(cat.whatage());