# Count Three-Block Subsequences

## Description

Call a sequence a **three-block sequence** when it is some positive number of
`0`s, then some positive number of `1`s, then some positive number of `2`s —
nothing before, between, or after. So `[0,0,1,1,2]` qualifies, while
`[1,0,2]`, `[0,0]`, and `[0,1,2,1]` do not.

Given an array `nums` whose entries are only `0`, `1`, and `2`, count the
subsequences of `nums` that are three-block sequences. Two subsequences count
separately when they pick different sets of indices, even if the resulting
values read the same. Because the count can be huge, report it modulo
`10⁹ + 7`.

A subsequence keeps the relative order of the elements it keeps and may skip
any of the others.

### Example 1

```text
Input: nums = [0,0,1,2,2]
Output: 9
Explanation: Any three-block subsequence takes its 0s from the first two
positions (3 non-empty choices), the 1 from the middle (1 choice), and its
2s from the last two positions (3 non-empty choices): 3 * 1 * 3 = 9.
```

### Example 2

```text
Input: nums = [1,2,0,1,2]
Output: 1
Explanation: The lone 0 sits before just one 1 and one 2, so the only
three-block subsequence is formed by the last three positions.
```

### Example 3

```text
Input: nums = [0,0,0,1,2]
Output: 7
Explanation: The 1 and the 2 must both be used, and the 0s can be any
non-empty subset of the three leading zeros: 2³ - 1 = 7.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `nums[i]` is `0`, `1`, or `2`

## Hints

### Hint 1

Warm up with an easier target first: how many subsequences of some prefix are
nothing but `0`s, and how would you extend that count as each new element
arrives?

### Hint 2

A three-block subsequence is finished in stages — all zeros, zeros then ones,
complete. What quantity would you track per prefix so each incoming element
advances exactly one stage?

### Hint 3

Sweep left to right with three counters: subsequences that so far hold only
`0`s, ones that already have `0`s followed by `1`s, and complete ones. A new
element either extends existing subsequences of its stage or promotes
subsequences from the previous stage.
