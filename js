console.clear();

// const array1 = [1, 2 ,3];
// const hi = [ "i sss", 4, [4,5]]

// Array.prototype._concat = function(...args) {
//   for (let i = 0; i < args.length; i++) {
//     if (Array.isArray(args[i])) {
//       this._concat(...args[i]);
//     } else {
//       this.push(args[i]);
//     }
//   }
// };
// array1._concat(hi)
// console.log(array1);

// const months = ['Jan', 'March', 'April', 'June'];

// const newIndex = 1;
// const newElement = "Feb";

// Inserts at index 1
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
//you need an index

// for (let i = months.length -1; i >= newIndex; i--) {
//   months[i + 1] = months[i]
// }

// months[newIndex] = newElement;

// console.log(months);

// for (let i =  newIndex; i < months.length ; i++) {

//   months[i + 1] = months[i]

// }

// months[newIndex] = newElement;

// console.log(months);
// 1 is the start/index, delete/pop removes last element

const months = ["Jan", "March", "April", "June"];

// function myFunction(newIndex, deleteCount = 0, ...remainingMonths) {
//   //insert or delete.

//   for (let i = newIndex; i < months.length; i++) {
//     remainingMonths[i + 1] = remainingMonths[i];
//   }

//   remainingMonths[newIndex] = "Feb";

//   if (deleteCount > 0) {
//     for (let i = 1; i <= deleteCount; i++) {
//       remainingMonths.pop();
//     }
//   }

//   return this;
// }

// console.log(myFunction(1, 3));

// Array.prototype._splice = function (newIndex, deleteCount = 0 , element) {
//   for (let i = newIndex; i < this.length - 1 ; i++ ) {
//     this[i + 1] = this[i];
//     console.log(i)
//     console.log( this[i+ 1]);
//   }

//   this[newIndex] = element;

//   if (deleteCount > 0) {
//     for (let i = 0; i < deleteCount; i++) {
//       this.pop();
//     }
//   }

//   return this;
// };

//  months._splice(1, 0, "Feb");

