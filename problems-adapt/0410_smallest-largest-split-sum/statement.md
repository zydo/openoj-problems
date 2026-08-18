# Smallest Largest Split Sum

## Description

Cut `nums` into exactly `k` non-empty pieces by placing `k - 1` cuts between
elements. The cost of a cutting is the largest sum of any one piece.

Return the smallest cost a cutting can achieve.

A piece is a contiguous run of elements, and every element belongs to exactly
one piece.

### Example 1

```text
Input: nums = [6,1,3,9,4,2], k = 2
Output: 15
Explanation: Cutting after the third element gives pieces [6,1,3] and [9,4,2]
with sums 10 and 15. No cutting does better: separating 9 from 4 forces the
piece holding 9 to carry 6, 1 and 3 as well, for 19.
```

### Example 2

```text
Input: nums = [5,5,5,5], k = 3
Output: 10
Explanation: Three pieces over four equal values — one piece must take two of
them, and no piece can be forced above 10.
```

### Example 3

```text
Input: nums = [2,9,3,1], k = 4
Output: 9
Explanation: With a piece per element, the largest piece is simply the largest
element.
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 10⁶`
- `1 <= k <= min(50, nums.length)`

## Hints

### Hint 1

Deciding on a cutting directly is awkward. Turn the question around: given a
cap `C`, can the array be cut into `k` pieces whose sums all stay within `C`?
That question has a one-sweep answer.

### Hint 2

To test a cap, walk left to right and keep stuffing elements into the current
piece until the next one would overflow, then start a new piece. Stretching
each piece as far as it goes never forces extra pieces later, so the count you
get is the fewest possible.

### Hint 3

The answer is the smallest cap that passes the test. Raising the cap can only
lower the piece count, so the pass/fail verdict flips exactly once — search for
the flip point between `max(nums)` and `sum(nums)`.
