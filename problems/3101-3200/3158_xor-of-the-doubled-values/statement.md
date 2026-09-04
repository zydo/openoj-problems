# XOR Of The Doubled Values

## Description

The array `nums` is built so that every value in it shows up either once
or twice — never more often than that.

Fold every value that shows up twice into a single bitwise XOR and
return the result. When nothing in the array repeats, return 0.

### Example 1

```text
Input: nums = [4,9,4,7]
Output: 4
Explanation: Only 4 shows up twice, so the fold is just 4 by itself.
```

### Example 2

```text
Input: nums = [8,3,5]
Output: 0
Explanation: Every value is a singleton. Nothing qualifies, and the
answer stays at the empty XOR, 0.
```

### Example 3

```text
Input: nums = [1,1,2,2,3,3]
Output: 0
Explanation: Three values repeat, and 1 ^ 2 ^ 3 = 0 — the folded pairs
happen to cancel one another.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`
- Every value in `nums` appears once or twice.

## Hints

### Hint 1

Tally how often each value occurs. The input's guarantee caps every
count at two, so one frequency sweep settles everything.

### Hint 2

Fold exactly the values whose tally reads two into the answer; values
seen once must stay out, since XOR only cancels values in pairs.
