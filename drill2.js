const Array = require('./Array');
const Memory = require('./memory');

function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  // length: 1, _capacity: 3, ptr: 0
  // arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // what is ptr actaully refering to ??
  // length: 5, _capacity: 12, ptr: 3
  arr.pop();
  arr.pop();
  arr.pop();


  console.log(arr);

  // print 1st item of array
  console.log(arr.get(0));

  // empties array
  arr.pop();
  arr.pop();

  // push new item
  arr.push("tauhida");
  console.log(arr.get(0));

}


console.log(main());
