var NODE = function (val) {
    this.val = val;
    this.nextNode = null;
};

var LinkedList = function (items, sorted) {
    this.head = null;
    this.sorted = sorted;
    this.length = 0;

    var thisListObj = this;
    function initializeList(vals) {
        for (var i = 0; i < vals.length; i++) {
            thisListObj.add(vals[i]);
        }
    }

    if (items)
        initializeList(items);
};

var _add = function (newNode) {
    var currNode = this.head;
    while (currNode.nextNode) {
        currNode = currNode.nextNode;
    }
    currNode.nextNode = newNode;
};

var _addSorted = function (newNode) {
    if (this.head.val > newNode.val) {
        var tempHead = this.head;
        this.head = newNode;
        this.head.nextNode = tempHead;
    }
    else {
        var currNode = this.head;
        while (currNode.nextNode && currNode.nextNode.val < newNode.val) {
            currNode = currNode.nextNode;
        }
        var tempNext = currNode.nextNode;
        currNode.nextNode = newNode;
        currNode.nextNode.nextNode = tempNext;
    }
};

LinkedList.prototype.add = function (val) {
    var newNode = new NODE(val);
    if (this.head === null) {
        this.head = newNode;
    }
    else if (this.sorted)
        _addSorted.call(this, newNode);
    else
        _add.call(this, newNode);
    this.length++;
};

LinkedList.prototype.delete = function () {
    if (this.head === null) {
        console.log('Cannot delete from empty list');
    }
    else if (this.head.nextNode === null) {
        console.log('Cannot delete head node.');
    }
    else {
        var currNode = this.head;
        while (currNode.nextNode.nextNode) {
            currNode = currNode.nextNode;
        }
        var deletedNode = currNode.nextNode;
        this.length--;
        currNode.nextNode = null;
        return deletedNode;
    }
};

LinkedList.prototype.print = function () {
    var printVal = '';
    if (this.head === null) {
        printVal = 'Empty List';
    }
    else {
        console.log(this.length);
        var currNode = this.head;
        while (currNode.nextNode) {
            printVal += currNode.val + '->';
            currNode = currNode.nextNode;
        }
        printVal += currNode.val;
    }
    console.log(printVal);
};

module.exports = LinkedList;