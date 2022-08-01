
function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
  }
  
  const Pen1 = new Pen('Bluepen','Blue', 3);
  
  console.log(Pen1.price);