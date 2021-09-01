const pen = {
    brand: 'econo',
    price: 5,
    writePoem: function (food) {
        console.log(food);
    }
}
const keys = Object.keys(pen);
const values = Object.values(pen);
// entries();

for (const key in pen) {
    console.log(pen[key]);
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;

if (a === b) {
    //hobe na    
}

const aBounded = pen.writePoem.bind(a);
aBounded();

//this bujhte  hobe aro kichu onno vabe


