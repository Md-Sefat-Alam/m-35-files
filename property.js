const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
// getting all properties keys names
const keys = Object.keys(bottle);
// console.log(keys)

// getting all properties values names
const values = Object.values(bottle);
// console.log(values)

// sokol property er key and value show korbe 2dimonsial arry diye
// const pairs = Object.entries(bottle);
// console.log(pairs)

//delete thekanor upai
Object.seal(bottle)

// deleting an object property 
// delete bottle.isCleaned; // not work for object is seal()
console.log(bottle);

// Object.freeze(bottle);
// bottle.price = 100;   // not change working for object is freeze()
// bottle.height = 16; //not working for object is seal()
