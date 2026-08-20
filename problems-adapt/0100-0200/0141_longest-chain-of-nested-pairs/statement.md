# Longest Chain of Nested Pairs

## Description

You are given a list `pairs` of integer pairs, where `pairs[i] = [wi, hi]`
gives the two coordinates of pair `i`.

One pair nests inside another when **both** of its coordinates are
strictly smaller than the corresponding coordinates of the other. Find the
longest sequence of pairs in which each nests inside the next, and return
its length.

Pairs cannot be swapped or reordered internally — `[2,5]` stays `[2,5]`.

### Example 1

```text
Input: pairs = [[4,9],[1,3],[5,8],[2,7]]
Output: 3
Explanation: [1,3] nests inside [2,7], which nests inside both [4,9] and
[5,8]. Every chain of four fails: [4,9] and [5,8] nest inside nothing
here, and neither contains the other (4 < 5 but 9 > 8).
```

### Example 2

```text
Input: pairs = [[6,6],[6,6],[6,6]]
Output: 1
Explanation: A pair must be strictly smaller on both coordinates to nest,
so equal pairs never chain.
```

### Example 3

```text
Input: pairs = [[2,4],[2,9],[3,5]]
Output: 2
Explanation: [2,4] and [2,9] share a width, so neither nests in the other;
the chain is [2,4] inside [3,5].
```

### Constraints

- `1 <= pairs.length <= 10^5`
- `pairs[i].length == 2`
- `1 <= wi, hi <= 10^5`

## Hints

### Hint 1

Nesting requires both coordinates to grow in step, so order the pairs by
width ascending — and decide carefully how ties on width should be broken.

### Hint 2

Under the right ordering, a legal chain becomes exactly a strictly
increasing subsequence of heights.

### Hint 3

Sorting same-width pairs by height descending makes them a decreasing run,
which is precisely what stops them from chaining with each other.

### Hint 4

Recover that subsequence in `O(n log n)` with patience sorting: keep, for
each chain length, the smallest height a chain of that length can end on.
