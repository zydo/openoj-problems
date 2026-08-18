# Static Range Sums

## Description

You are given an integer array `nums` that will never change again. Many
questions are coming about it, all of the same kind: what do the elements of
`nums` from position `left` through position `right` add up to, endpoints
included, with `left <= right` guaranteed.

Because the array is fixed, any one-time preparation over it is fair.

Implement the `StaticRanges` class:

- `StaticRanges(int[] nums)` — hold on to `nums`.
- `long rangeSum(int left, int right)` — return
  `nums[left] + nums[left + 1] + ... + nums[right]`.

### Example 1

```text
Input:
["StaticRanges", "rangeSum", "rangeSum", "rangeSum"]
[[[5, -2, 7, 1, -4, 3]], [1, 3], [0, 5], [2, 2]]
Output: [null, 6, 10, 7]
Explanation:
StaticRanges ranges = new StaticRanges([5, -2, 7, 1, -4, 3]);
ranges.rangeSum(1, 3); // -2 + 7 + 1 = 6
ranges.rangeSum(0, 5); // the whole array: 5 - 2 + 7 + 1 - 4 + 3 = 10
ranges.rangeSum(2, 2); // a single element
```

### Example 2

```text
Input:
["StaticRanges", "rangeSum", "rangeSum", "rangeSum"]
[[[-100000, 100000]], [0, 1], [0, 0], [1, 1]]
Output: [null, 0, -100000, 100000]
Explanation: Values sit at both ends of the allowed range, and a
two-element query cancels to zero.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁵ <= nums[i] <= 10⁵`
- `0 <= left <= right < nums.length`
- Up to `10⁴` calls to `rangeSum`.

### Follow-up

Can one `O(n)` pass over `nums` at construction make every later query a
constant-time answer?

## Hints

### Hint 1

Adding up a stretch of the array per question costs work proportional to
its length each time. The array is frozen, so compute something once that
lets a query combine only a few ready numbers.

### Hint 2

Record, for every `i`, the total of the first `i` elements — call it
`prefix[i]`, with `prefix[0] = 0`. The whole table fills in a single pass
because each entry is the previous entry plus one new element.

### Hint 3

The total of a stretch is the total up to its end minus the total up to its
start: `rangeSum(left, right) = prefix[right + 1] - prefix[left]`. Both
entries exist by construction, so one subtraction settles the query.
