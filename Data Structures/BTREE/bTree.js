var NODE = function (val) {
    this.val = val;
    this.lc = null;
    this.rc = null;
}

var BTREE = function (items, sorted) {
    this.root = null;
    this.count = 0;
    this.sorted = sorted;

    var thisTreeObj = this;
    function initializeTree(vals) {
        for (var i = 0; i < vals.length; i++) {
            thisTreeObj.add(vals[i]);
        }
    }

    if (items) {
        initializeTree(items);
    }
}

var _getRandomPath = function () {
    var num = parseInt(Math.random() * 10) % 2;
    var pathToPick = num === 1 ? 'rc' : 'lc';
    console.log(pathToPick);
    return pathToPick;
}

var _add = function (newNode) {
    var currNode = this.root;
    do {
        var pathToPick = _getRandomPath();

        if (currNode[pathToPick] === null) {
            currNode[pathToPick] = newNode;
            console.log('node added');
            break;
        }
        else {
            currNode = currNode[pathToPick];
        }
    } while (1)
}

var _addSorted = function (newNode) {
    //TODO
}


BTREE.prototype.addMany = function (items) {
    for (var i = 0; i < items.length; i++) {
        this.add(items[i]);
    }
}

BTREE.prototype.add = function (val) {
    var newNode = new NODE(val);
    if (this.root === null) {
        this.root = newNode;
    }
    else if (this.sorted) {
        _addSorted.call(this, newNode);
    }
    else {
        _add.call(this, newNode);
    }
    this.count++;
}



var _printDF = function (node) {
    if (node === null)
        return;
    console.log(node.val);
    _printDF(node.lc);
    _printDF(node.rc);
}

var _addBlanks = function (count) {
    var blanks = ''
    for (var i = 0; i < count; i++) {
        blanks += ' ';
    }
    return blanks;
}

var _printBF = function (node) {
    var screenWidth = 80;
    var printVal = '';
    var currDepth = 1;
    var node = Object.assign(node, { depth: 1, count: 1 });
    var nodes = [node];

    while (nodes.length > 0) {
        var currNode = nodes.splice(0, 1)[0];
        if (currNode.depth > currDepth) {
            console.log('\n\n' + printVal);
            printVal = '';
            currDepth = currNode.depth;
        }
        var partitions = Math.pow(2, (currNode.depth - 1)) + 1;
        var partitionSize = screenWidth / partitions;
        var blanksNeeded = partitionSize * currNode.count - printVal.length;
        printVal += _addBlanks(blanksNeeded) + currNode.val;
        if (currNode.lc)
            nodes.push(Object.assign(currNode.lc, { depth: currNode.depth + 1, count: currNode.count * 2 - 1 }));
        if (currNode.rc)
            nodes.push(Object.assign(currNode.rc, { depth: currNode.depth + 1, count: currNode.count * 2 }));

    };

    console.log('\n\n' + printVal);
}

BTREE.prototype.print = function (depthFirst) {
    if (this.root === null)
        console.log('Empty Tree')
    else {
        if (depthFirst) {
            console.log('Depth First');
            _printDF(this.root);
        }
        else {
            console.log('Breadth First');
            _printBF(this.root);
        }
    }
}

module.exports = BTREE;