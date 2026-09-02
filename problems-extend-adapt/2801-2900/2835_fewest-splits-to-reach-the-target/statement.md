# Fewest Splits To Reach The Target

## Description

You are given a 0-indexed array `nums` in which every element is a power
of two, together with an integer `target`.

A split acts on a single element of the array:

- pick an element `nums[i]` with `nums[i] > 1`;
- remove it from the array;
- append two copies of `nums[i] / 2` at the end.

Splits can keep going — each fresh copy may itself be split later. From
time to time you stop and look for a subsequence of the current array
whose elements sum to `target`. Return the fewest splits after which such
a subsequence can exist, or `-1` if no amount of splitting ever gets you
one.

### Example 1

```text
Input: nums = [2,4,1], target = 7
Output: 0
Explanation: Nothing needs splitting — the entire array already sums to
7, and 2 + 4 + 1 selects it.
```

### Example 2

```text
Input: nums = [16], target = 5
Output: 4
Explanation: Split 16 down the ladder 16 → 8 → 4 → 2 → 1, four splits in
all, leaving pieces that include a 4 and a 1; those two sum to 5. Fewer
splits cannot free a 1 from 16 at all.
```

### Example 3

```text
Input: nums = [1,1], target = 4
Output: -1
Explanation: Splitting never changes the array's total, which is stuck at
2 — no subsequence can ever reach 4.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2³⁰`
- every element of `nums` is a power of two
- `1 <= target < 2³¹`

## Hints

### Hint 1

A split preserves the array's total. If the total starts below `target`,
return `-1`; otherwise an answer always exists.

### Hint 2

Work through `target`'s set bits from least significant to most
significant, carving out one piece per bit.

### Hint 3

When the current bit `b` has no idle element of value `2^b`, take the
smallest available `2^j` with `j > b` and split it down: the chain costs
exactly `j - b` splits and leaves a spare twin at every level it passes.

### Hint 4

Before moving past bit `b`, roll its leftovers up: two idle `2^b` pieces
are interchangeable with one `2^(b+1)` element, so they feed later bits
for free.
