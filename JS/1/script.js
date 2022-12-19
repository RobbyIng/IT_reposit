// // document.write("<h2>Первая программа на JavaScript</h2>");
// const cat = {
//     position: 0,
//     go(steps) {
//       this.position += steps;
//     }
//   }
  
//   let go = cat.go;
//   go(5);
//   console.log(cat.position)

//   class Pet {
//     constructor(name) {
//       this.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
//     }
   
//     get name
//   }
   
//   const myCat = new Pet("пушок");
//   console.log(myCat.name);
  
function pow2() {
    this.x *= this.x;
  }
  const a = {x: 10};
  aPow2 = pow2.bind(a);
  
  const b = {x: 20};
  bPow2 = aPow2.bind(b);
  
  aPow2();
  bPow2();
  
  console.log(a.x, b.x);

  class Pet {
    position = 0;
  
    go = (steps) => {
      this.position += steps;
    }
  }
  
  let cat = new Pet();
  let go = cat.go;
  go(5);
  console.log(cat.position)