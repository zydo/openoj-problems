// Common data types supplied to every TypeScript submission (compiled
// with the submission; instances are constructed by the judge's reader).
// Field layout is the judge's wire contract — see common/README.md.
//
// The judge compiles the assembled program as one ES module (an
// `export {}` marker prefixes main.ts), so this file's top-level
// classes are plainly visible to the submission without imports and
// module scope shadows same-name DOM globals — the n-ary `Node` below
// does not collide with lib.dom's `Node`.

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number) {
        this.val = val ?? 0;
        this.left = null;
        this.right = null;
    }
}

class Node {
    val: number;
    children: Node[];
    constructor(val?: number, children?: Node[]) {
        this.val = val ?? 0;
        this.children = children ?? [];
    }
}

class QuadNode {
    val: boolean;
    isLeaf: boolean;
    topLeft: QuadNode | null;
    topRight: QuadNode | null;
    bottomLeft: QuadNode | null;
    bottomRight: QuadNode | null;
    constructor(val?: boolean, isLeaf?: boolean) {
        this.val = val ?? false;
        this.isLeaf = isLeaf ?? false;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
}

// NestedInteger holds an integer or a list of NestedInteger (never both);
// the API mirrors LeetCode's TypeScript template.
class NestedInteger {
    private integer: number;
    private holdsInteger: boolean;
    private list: NestedInteger[];
    constructor(value?: number) {
        this.integer = 0;
        this.holdsInteger = false;
        this.list = [];
        if (value !== undefined) {
            this.setInteger(value);
        }
    }
    isInteger(): boolean {
        return this.holdsInteger;
    }
    getInteger(): number {
        return this.integer;
    }
    setInteger(value: number): void {
        this.integer = value;
        this.holdsInteger = true;
        this.list = [];
    }
    add(item: NestedInteger): void {
        this.holdsInteger = false;
        this.list.push(item);
    }
    getList(): NestedInteger[] {
        return this.list;
    }
}

class NodeWithNext {
    val: number;
    left: NodeWithNext | null;
    right: NodeWithNext | null;
    next: NodeWithNext | null;
    parent: NodeWithNext | null;
    constructor(val?: number) {
        this.val = val ?? 0;
        this.left = null;
        this.right = null;
        this.next = null;
        this.parent = null;
    }
}

class MultiListNode {
    val: number;
    prev: MultiListNode | null;
    next: MultiListNode | null;
    child: MultiListNode | null;
    constructor(val?: number) {
        this.val = val ?? 0;
        this.prev = null;
        this.next = null;
        this.child = null;
    }
}
