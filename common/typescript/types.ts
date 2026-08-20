// Common data types supplied to every TypeScript submission (compiled
// with the submission; instances are constructed by the judge's reader).
// Field layout is the judge's wire contract — see common/README.md.
//
// The n-ary Node is deliberately absent: the judge compiles with
// --lib ES2022,DOM, whose global `Node` type collides with a class of
// the same name. No problem in the bank is n-ary; when one arrives,
// either compile without DOM or rename the type — a decision to make
// with a consumer in hand.

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) { this.val = val ?? 0; this.next = next ?? null; }
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number) { this.val = val ?? 0; this.left = null; this.right = null; }
}
