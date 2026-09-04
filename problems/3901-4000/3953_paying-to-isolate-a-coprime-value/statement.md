# Paying To Isolate A Coprime Value

## Description

Start from the array `nums`, where every entry is a positive integer no
greater than `10^5`. You may rewrite entries any number of times; each
rewrite replaces one entry with a fresh positive integer that is at most
`maxVal`, and burns one point. Entries may also be left untouched, even when
they exceed `maxVal`.

When the rewriting is done, pick one entry of the final array whose value
shares no prime factor with any other entry of the final array. The score is
that chosen value minus the number of rewrites you performed.

Return the largest score that can be reached.

### Example 1

```text
Input: nums = [10,15,7], maxVal = 9
Output: 14
Explanation:
    Keep 15 and 7, and rewrite 10 into any value at most 9 that shares no
    factor with 15, such as 8. One rewrite buys a chosen value of 15,
    scoring 15 - 1 = 14.
```

### Example 2

```text
Input: nums = [6,10,14], maxVal = 20
Output: 18
Explanation:
    Rewrite 6 into 19, which is coprime to both 10 and 14. The chosen
    value 19 minus the single rewrite gives 18.
```

### Example 3

```text
Input: nums = [1,1,1], maxVal = 2
Output: 1
Explanation:
    The value 1 is coprime with everything and already present, so no
    rewrite is needed and the score is 1.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `1 <= maxVal <= 10^5`

### Hint 1

Fix the value `x` you intend to pick: every other entry divisible by some
prime factor of `x` has to be rewritten away.

### Hint 2

Count multiples with a divisor-frequency table and combine the counts of
`x`'s distinct prime factors with inclusion-exclusion.
