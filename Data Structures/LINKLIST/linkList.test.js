var LinkList = require('./linkList.js');

var emptyList = new LinkList();
emptyList.print();


var foodChain = new LinkList(['Tiger', 'Wolf', 'Dog']);
console.log('\nFood Chain:');
foodChain.print();

console.log('\nAdding more animals.');
foodChain.add('Cat');
foodChain.add('Rat');
console.log('\nFood Chain:');
foodChain.print();

console.log('\n test deleting nodes');
console.log('Deleted : ' + JSON.stringify(foodChain.delete()));
console.log('Deleted : ' + JSON.stringify(foodChain.delete()));
foodChain.print();

console.log('\ntest sorted list');


var sortedList = new LinkList([5, 3, 6, 7, 1, 2, 9, 0], true);

sortedList.print();
sortedList.add(8);
sortedList.add(-1);
sortedList.add(10);
sortedList.add(4);
sortedList.print();