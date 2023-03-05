// Strict equality(===) vs loose equality(==)
// ======================================
// always use ===
// equal comparison does not work for non-premitive

const first=5;
const second='5';
// if(first==second){
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal");
// }
// //output Equal

if(first===second){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

//  output Not Equal (ant its true... so strict equal is the best for use)

// for further learning search in google:==========>
// ========================================

// type coercion in javascript
// type conversion in javascript
//type casting in javascript
