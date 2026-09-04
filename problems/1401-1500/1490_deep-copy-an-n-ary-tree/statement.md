# Deep-Copy an N-ary Tree

## Description

Build a deep copy of the n-ary tree whose root is given: the copy must
reproduce the original's values and parent-child arrangement exactly, while
sharing no node object with it.

Every node of the tree holds an integer value and a list (List[Node]) of
its children.

```text
class Node {
    public int val;
    public List<Node> children;
}
```

Trees arrive in a level-order wire format: the root's value comes first,
then each group of siblings is listed and closed off with a null (see the
examples). Your returned tree is read back in that same format and checked
value by value against the input, so the answer needs a freshly built node
for every original node, with children kept in their original order.

### Example 1

![diagram](figures/1490-1.svg)

```text
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,null,3,2,4,null,5,6]
Explanation: Each node of the answer is newly constructed; only the
values and the shape are carried over from the input.
```

### Example 2

![diagram](figures/1490-2.svg)

```text
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
```

### Example 3

```text
Input: root = [7,null,-4,12,0,null,9,-2,null,5]
Output: [7,null,-4,12,0,null,9,-2,null,5]
Explanation: The copy mirrors the original: 7's children are -4, 12 and
0, -4 has children 9 and -2, and 12 has child 5.
```

### Constraints

- The tree holds between 0 and 10⁴ nodes.
- The depth never exceeds 1000.
- Every node value fits in a signed 32-bit integer.

### Follow up

Would the same idea still work on a graph, where one underlying node can
be reached along many different paths?

## Hints

### Hint 1

Walk the structure once, and for every node you meet build a matching
copy while noting which copy answers to which original.

### Hint 2

Fill each new node's child list with the copies of the original's
children, and the copy comes out structurally identical to the input.
