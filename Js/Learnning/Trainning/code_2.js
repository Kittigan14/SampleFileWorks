const Obj = [{
    name: "A",
    price: 150,
    product: "gun",
},
{
    name: "B",
    price: 250,
    product: "book",
},
{
    name3: "C",
    price: 350,
    product: "box",
}];

display();

function display() {

    let lowest = Obj[1].price;
    let highest = Obj[1].price;

    for (let index = 0 ; index < Obj.length ; index += true) {

        if ( lowest > Obj[index].price ) {
            lowest = Obj[index].price;  
            console.log("Lowest is : " + lowest + "\nProduct is : " + Obj[index].product); 
        }
        else if ( highest < Obj[index].price ) {
            highest = Obj[index].price;  
            console.log("Highest is : " + highest + "\nProduct is : " + Obj[index].product); 
        } 
    }
}