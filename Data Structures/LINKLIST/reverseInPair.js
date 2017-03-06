var LinkList = require('./linkList.js');



function nextHeadAfterReverse(head) {
    if (head === null) {
        return null;
    }
    if (head.nextNode === null) {
        return head;
    }
    else {
        var temp = head.nextNode.nextNode;

        var newHead = head.nextNode;
        newHead.nextNode = head;
        newHead.nextNode.nextNode = nextHeadAfterReverse(temp);
        return newHead;
    }
}

var list = new LinkList();
list.print();
list.head = nextHeadAfterReverse(list.head);
list.print();

list = new LinkList([1]);
list.print();
list.head = nextHeadAfterReverse(list.head);
list.print();

list = new LinkList([1, 2, 3, 4, 5, 6, 7]);
list.print();
list.head = nextHeadAfterReverse(list.head);
list.print();

list = new LinkList([1, 2, 3, 4, 5, 6, 7, 8]);
list.print();
list.head = nextHeadAfterReverse(list.head);
list.print();

