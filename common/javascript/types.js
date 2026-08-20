// Common data types supplied to every JavaScript submission (evaluated
// with the submission; instances are constructed by the judge's reader).
// Field layout is the judge's wire contract — see common/README.md.

class ListNode {
    constructor(val = 0, next = null) { this.val = val; this.next = next; }
}

class TreeNode {
    constructor(val = 0) { this.val = val; this.left = null; this.right = null; }
}

class Node {
    constructor(val = 0, children = []) { this.val = val; this.children = children; }
}
