var BTREE = require('./bTree.js');

var tree = new BTREE();
tree.print();

tree.addMany([2, 3, 4, 5, 6, 1, 7, 13, 63, 12]);


tree.print();
tree.print(true);