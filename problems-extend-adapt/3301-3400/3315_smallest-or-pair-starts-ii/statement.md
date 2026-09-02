# Smallest Or-Pair Starts II

## Description

Same arrangement as its smaller sibling, pushed to a wider range: `nums`
holds n primes, and every entry asks for the smallest non-negative value
that ORs with its own successor back to that prime,

    ans[i] OR (ans[i] + 1) == nums[i]

with -1 recorded wherever no such value exists.

The stretched bounds are the point of this version — probing candidates
one by one no longer fits comfortably, so the answers should fall straight
out of the bits of `nums[i]`.

### Example 1

```text
Input: nums = [37,2,11]
Output: [36,-1,9]
Explanation:
For 37 the smallest value that works is 36, because 36 OR (36 + 1) = 37.
For 2 no value can work — an OR of a value with its successor always ends
in a set bit, hence odd — so the slot is -1.
For 11 the smallest value that works is 9, because 9 OR (9 + 1) = 11.
```

### Example 2

```text
Input: nums = [999999937,131071]
Output: [999999936,65535]
Explanation:
999999936 OR (999999936 + 1) = 999999937, and nothing smaller reaches it.
131071 in binary is a solid run of seventeen 1s; clearing the topmost bit
of that run gives 65535, and 65535 OR (65535 + 1) = 131071.
```

### Constraints

- `1 <= nums.length <= 100`
- `2 <= nums[i] <= 10⁹`
- Each `nums[i]` is a prime number.

## Hints

### Hint 1

Write a few primes in binary next to their answers and look for which bit
patterns the OR condition can even produce.

### Hint 2

The OR of a value with its successor always ends in a set bit, so the even
entries are settled before any real work begins.

### Hint 3

A valid value turns out to be `nums[i]` with exactly one bit cleared from
its trailing run of 1s — deciding which bit's clearance gives the smallest
result finishes the problem.
