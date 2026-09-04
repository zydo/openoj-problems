# A Count Apart From The Smallest

## Description

Handed an integer array `nums`, look at every pair of different values `x`
and `y` it contains that satisfies both:

- `x < y`, and
- the two values occur a different number of times in `nums`.

Out of all the pairs that qualify, pick the one with the least possible
`x`; when several share that `x`, prefer the least possible `y`.

Return the winner as `[x, y]`, or `[-1, -1]` when no qualifying pair
exists.

### Example 1

```text
Input: nums = [4,4,6,6,6,9]
Output: [4,6]
Explanation: The least value is 4, seen 2 times. The next value up, 6,
appears 3 times — a different count — so the pair is [4, 6].
```

### Example 2

```text
Input: nums = [2,8]
Output: [-1,-1]
Explanation: Both values occur exactly once, so no pair separates on
frequency and the answer is [-1, -1].
```

### Example 3

```text
Input: nums = [5]
Output: [-1,-1]
Explanation: A single value cannot form a pair at all, so the answer is
[-1, -1].
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Tally how often each value occurs with a hash map or a counting array
before touching any pairs.

### Hint 2

Whenever an answer exists, its `x` is forced: it is the smallest distinct
value. If nothing above it had another frequency, every value would share
one count and no pair could exist.

### Hint 3

With `x` settled, climb the distinct values in order and stop at the first
one whose tally differs from the smallest value's — that is your `y`.
