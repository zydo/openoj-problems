# Updatable Range Sums

## Description

An integer array `nums` is handed to you once, and from then on two kinds of
request arrive in any order and any number of times: overwrite one entry with
a new number, or report what a contiguous stretch of entries currently adds
up to. A stretch is named by its first and last positions, both counted in,
and the first is never past the last.

Because entries change, no single precomputed table of totals stays correct
for long — the structure has to absorb a write as cheaply as it answers a
read.

Implement the `UpdatableRanges` class:

- `UpdatableRanges(int[] nums)` — start from the given entries.
- `void setValue(int index, int value)` — make `nums[index]` equal `value`
  from now on.
- `long rangeSum(int left, int right)` — return the current total
  `nums[left] + nums[left + 1] + ... + nums[right]`.

### Example 1

```text
Input:
["UpdatableRanges", "rangeSum", "setValue", "rangeSum", "rangeSum"]
[[[4, -1, 6, 2]], [0, 3], [2, -5], [0, 3], [1, 2]]
Output: [null, 11, null, 0, -6]
Explanation:
UpdatableRanges ranges = new UpdatableRanges([4, -1, 6, 2]);
ranges.rangeSum(0, 3);  // 4 - 1 + 6 + 2 = 11
ranges.setValue(2, -5); // entries are now [4, -1, -5, 2]
ranges.rangeSum(0, 3);  // 4 - 1 - 5 + 2 = 0
ranges.rangeSum(1, 2);  // -1 - 5 = -6
```

### Example 2

```text
Input:
["UpdatableRanges", "setValue", "setValue", "rangeSum", "rangeSum"]
[[[-3, 8]], [0, 9], [1, -9], [0, 1], [0, 0]]
Output: [null, null, null, 0, 9]
Explanation:
UpdatableRanges ranges = new UpdatableRanges([-3, 8]);
ranges.setValue(0, 9);  // entries are now [9, 8]
ranges.setValue(1, -9); // entries are now [9, -9]
ranges.rangeSum(0, 1);  // 9 - 9 = 0
ranges.rangeSum(0, 0);  // a stretch of one entry
```

### Example 3

```text
Input:
["UpdatableRanges", "rangeSum", "setValue", "rangeSum", "rangeSum"]
[[[2, 2, 2, 2, 2]], [1, 4], [4, -6], [1, 4], [0, 2]]
Output: [null, 8, null, 0, 6]
Explanation:
UpdatableRanges ranges = new UpdatableRanges([2, 2, 2, 2, 2]);
ranges.rangeSum(1, 4);  // four entries of 2 make 8
ranges.setValue(4, -6); // only the last entry moves
ranges.rangeSum(1, 4);  // 2 + 2 + 2 - 6 = 0
ranges.rangeSum(0, 2);  // 6, unaffected by a write outside it
```

### Constraints

- `nums` holds between `1` and `3 * 10⁴` entries.
- Every entry, initial or written, lies in `[-100, 100]`; so does `value`.
- `index` satisfies `0 <= index < nums.length`.
- `left` and `right` satisfy `0 <= left <= right < nums.length`.
- `setValue` and `rangeSum` are called at most `5 * 10⁴` times together.

### Follow-up

Can a single structure serve both `setValue` and `rangeSum` in `O(log n)`
time, with `n = nums.length`?

## Hints

### Hint 1

The two operations pull in opposite directions. Storing the raw entries makes
a write instant and a query linear; storing running totals makes a query
instant and a write linear. Neither extreme survives `5 * 10⁴` mixed calls at
this size, so store totals of _pieces_ instead of totals of everything.

### Hint 2

Cover the array with blocks whose lengths are powers of two, arranged so that
any prefix is the union of `O(log n)` of them and any single position belongs
to `O(log n)` of them. Numbering the blocks from `1` makes the arithmetic
fall out of the lowest set bit: the block recorded at slot `i` spans
`i & (-i)` positions and ends at `i`.

### Hint 3

Peeling the lowest set bit off a counter (`i -= i & (-i)`) enumerates exactly
the blocks that tile a prefix; adding it back (`i += i & (-i)`) enumerates the
blocks a written position sits inside. Then a stretch total is one prefix
total minus another, and a write is best applied as a _difference_ — keep the
current entries alongside the blocks so you know how much each write moved
its position by.
