# Cursor Over A Search Tree

## Description

Build a two-way cursor over the in-order sequence of a binary search
tree: from any position it can read the next value forward or the
previous value backward.

Implement the `TreeCursor` class:

- `TreeCursor(TreeNode root)` initializes the cursor over the tree's
  in-order sequence; by convention, the first `next()` reports the
  smallest value.
- `int next()` advances the cursor and returns the next value in
  in-order.
- `boolean hasNext()` returns `true` if a next value exists.
- `boolean hasPrev()` returns `true` if a previous value exists.
- `int prev()` moves the cursor back and returns the previous value in
  in-order.

The interleaving of `next` and `prev` calls is arbitrary — the cursor
must always answer from the tree's full in-order sequence.

### Example 1

```text
Input:
["TreeCursor","next","next","prev","next","hasNext","next","next","next","hasNext","hasPrev","prev","prev"]
[[[7,3,15,null,null,9,20]],[],[],[],[],[],[],[],[],[],[],[],[]]
Output: [null,3,7,3,7,true,9,15,20,false,true,15,9]
Explanation: The tree's in-order sequence is [3,7,9,15,20]. The cursor
advances 3, 7, steps back to 3, forward to 7, then walks 9, 15, 20 —
where hasNext turns false. Stepping back twice re-reads 15 and 9.
```

### Example 2

```text
Input:
["TreeCursor","hasPrev","next","hasPrev","next","hasPrev","prev"]
[[[2,1,3]],[],[],[],[],[],[]]
Output: [null,false,1,false,2,true,1]
Explanation: With only three values the cursor quickly reaches the end;
prev() still reads backward over what has been visited.
```

### Constraints

- The number of nodes in the tree is in the range `[1, 10⁵]`.
- `1 <= Node.val <= 10⁶`
- At most `10⁵` calls are made to the five methods.
- All calls to `next` and `prev` are valid — the cursor never steps past
  an end without checking first.

## Hints

### Hint 1

An in-order iterator with an explicit stack answers `next`/`hasNext` in
amortized O(1).

### Hint 2

For `prev`, record the values `next()` has already produced — a stack of
visited values makes backward steps trivial.
