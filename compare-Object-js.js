const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first === third) {
    // console.log('objects are equal')
}
else {
    // console.log("objects are different")
}



const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));

/* for (const prop in first2) {
    if (first2[prop] !== second2[prop]) {
        console.log('not same')
    }
    else {
        console.log('same')
    }
} */

/* if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log("objects are equal")
} else {
    console.log('objects are not equal');
} */

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        console.log('a')
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            console.log('b')
            return false
        }
    }
    console.log('c')
    return true;
}
const isEqual = compareObjects(first2, second2)
console.log(isEqual)