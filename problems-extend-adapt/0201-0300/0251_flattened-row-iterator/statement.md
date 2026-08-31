# Flattened Row Iterator

## Description

Design an iterator that walks a 2D array of integers as if it were one
flat sequence, supporting `next` and `hasNext`.

Implement the `FlattenedRowIterator` class:

- `FlattenedRowIterator(vec)` initializes the iterator over the 2D array
  `vec`.
- `next()` returns the next element in row-major order and advances the
  iterator. Every call to `next` is guaranteed valid.
- `hasNext()` returns whether any element remains.

### Example 1

```text
Input:
["FlattenedRowIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[[5, 6, 7], [], [8]]], [], [], [], [], [], [], []]
Output: [null, 5, 6, true, 7, true, 8, false]
Explanation:
FlattenedRowIterator it = new FlattenedRowIterator([[5, 6, 7], [], [8]]);
it.next();    // returns 5
it.next();    // returns 6
it.hasNext(); // returns true
it.next();    // returns 7 — the empty middle row is skipped entirely
it.hasNext(); // returns true
it.next();    // returns 8
it.hasNext(); // returns false
```

### Constraints

- `0 <= vec.length <= 200`
- `0 <= vec[i].length <= 500`
- `-500 <= vec[i][j] <= 500`
- At most `10⁵` calls total are made to `next` and `hasNext`.

### Follow-up

Can you implement this using only your language's built-in iterator
machinery — C++ or Java iterators, for instance?
