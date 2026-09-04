# Custom Linked List

## Description

Build a singly linked list from scratch, without relying on any built-in
linked-list library. Nodes are numbered `0` through `length - 1` from the
head.

Implement the `CustomLinkedList` class:

- `CustomLinkedList()` initializes an empty list.
- `get(index)` returns the value at `index`, or `-1` if `index` is out
  of range.
- `addAtHead(val)` inserts a node with value `val` before the current
  head.
- `addAtTail(val)` appends a node with value `val` after the current
  tail.
- `addAtIndex(index, val)` inserts a node with value `val` right before
  `index`. If `index` equals the list's current length, the node is
  appended. If `index` exceeds the length, nothing happens.
- `deleteAtIndex(index)` deletes the node at `index`, if it exists.

### Example 1

```text
Input:
["CustomLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [7], [9], [1, 8], [1], [1], [1]]
Output: [null, null, null, null, 8, null, 9]
Explanation:
CustomLinkedList list = new CustomLinkedList();
list.addAtHead(7);     // [7]
list.addAtTail(9);     // [7, 9]
list.addAtIndex(1, 8); // [7, 8, 9]
list.get(1);           // returns 8
list.deleteAtIndex(1); // [7, 9]
list.get(1);           // returns 9
```

### Constraints

- `0 <= index, val <= 1000`
- At most `2000` calls total are made to `get`, `addAtHead`, `addAtTail`,
  `addAtIndex`, and `deleteAtIndex`.
