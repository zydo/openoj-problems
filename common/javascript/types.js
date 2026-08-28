// Common data types supplied to every JavaScript submission (evaluated
// with the submission; instances are constructed by the judge's reader).
// Field layout is the judge's wire contract — see common/README.md.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class TreeNode {
    constructor(val = 0) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Node {
    constructor(val = 0, children = []) {
        this.val = val;
        this.children = children;
    }
}

class QuadNode {
    constructor(val = false, isLeaf = false) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
}

// NestedInteger holds an integer or a list of NestedInteger (never both);
// the API mirrors LeetCode's JavaScript template.
class NestedInteger {
    constructor(value) {
        this.integer = 0;
        this.holdsInteger = false;
        this.list = [];
        if (typeof value === "number") {
            this.setInteger(value);
        }
    }
    isInteger() {
        return this.holdsInteger;
    }
    getInteger() {
        return this.integer;
    }
    setInteger(value) {
        this.integer = value;
        this.holdsInteger = true;
        this.list = [];
    }
    add(item) {
        this.holdsInteger = false;
        this.list.push(item);
    }
    getList() {
        return this.list;
    }
}

class NodeWithNext {
    constructor(val = 0) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
        this.parent = null;
    }
}

class MultiListNode {
    constructor(val = 0) {
        this.val = val;
        this.prev = null;
        this.next = null;
        this.child = null;
    }
}
