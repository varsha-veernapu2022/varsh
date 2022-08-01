var car = {
    make: "Ford",
    model: "Explorer",
    year: 2008,
    color: "red",
    fuel: "gas",
    mpg: 18
}
 var target=Object.assign({} ,car); 
 console.log(target);
 console.log(Object.isFrozen(car));
 Object.freeze(car);
 console.log(Object.isFrozen(car));
 const vehicle ={
    isHuman:false,
    printIntroduction:function() {
        console.log('I am a vehicle ${this.name} .i am not a human ${this.isHuman}.');
    }
 };
 const example=Object.create(vehicle);
 example.name='Lorry';
 example.isHuman=false;
 example.printIntroduction();
 const bus = {  
    property1: 42  
  };  
  Object.seal(bus);  
  bus.property1 = 45;  
  console.log(bus.property1);  
    
  delete bus.property1; // cannot delete when sealed  
  console.log(bus.property1);  


 