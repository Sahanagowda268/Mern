function checkInventory(product, quantity) {
  if (quantity < 10) {
     console.log("Restock Immediately");
  }  else if(10<=quantity<=20){
    console.log(" stock is low");
  }
  else if(quantity>20){
    console.log("no alerts needed");
  }
}
console.log(checkInventory("p1", 22));
