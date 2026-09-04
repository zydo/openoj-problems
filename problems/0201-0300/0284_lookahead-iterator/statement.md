# Lookahead Iterator

## Description

Design an iterator over a sequence of integers that adds a `peek`
operation on top of the usual `next` and `hasNext`.

Implement the `LookaheadIterator` class:

- `LookaheadIterator(nums)` initializes the iterator over the integer
  sequence `nums`.
- `next()` returns the current element and advances the iterator.
- `hasNext()` returns whether any element remains.
- `peek()` returns the element `next()` would return, WITHOUT advancing
  the iterator.

On the original problem this wraps an arbitrary language-provided
iterator object; here the sequence arrives as a plain integer array over
the wire instead, but the contract is identical — `next`, `hasNext`, and
`peek` behave exactly as they would over any iterator, with `peek` never
moving the cursor.

### Example 1

```text
Input:
["LookaheadIterator", "next", "peek", "next", "next", "hasNext"]
[[[9, 4, 7]], [], [], [], [], []]
Output: [null, 9, 4, 4, 7, false]
Explanation:
LookaheadIterator it = new LookaheadIterator([9, 4, 7]);
it.next();    // returns 9, cursor advances
it.peek();    // returns 4, cursor does NOT move
it.next();    // returns 4, cursor advances
it.next();    // returns 7, cursor advances
it.hasNext(); // returns false
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- Every call to `next` and `peek` is guaranteed valid.
- At most `1000` calls total are made to `next`, `hasNext`, and `peek`.

### Follow-up

How would you generalize this design to work over any element type, not
just integers?

## Hints

### Hint 1

The whole trick is to look one step ahead of where you currently stand,
and cache what you see there.

### Hint 2

Does a single cached value suffice, or do you need to track more?

### Hint 3

Trace through calling `peek` before `next` versus `next` before `peek` —
both orders must behave correctly.
