# Fewest Swaps For Digit-Sum Order

## Description

Rank every number in `nums` by the sum of its digits; when two numbers
carry the same digit sum, the smaller number ranks first.

You may rearrange the list only by swapping — choosing two positions and
exchanging the values they hold. Return the fewest swaps that leave
`nums` in the digit-sum ranking.

### Example 1

```text
Input: nums = [908,47,260,71]
Output: 2
Explanation:
The digit sums are [17, 11, 8, 8], so the goal ranking is
[71, 260, 47, 908] — 71 and 260 share the digit sum 8, so the smaller
number goes first. Swapping 908 with 71 and then 47 with 260 gets there
in two swaps, and one swap cannot settle both out-of-place pairs.
```

### Example 2

```text
Input: nums = [120,33,24]
Output: 1
Explanation:
The digit sums are [3, 6, 6], giving the goal ranking [120, 24, 33].
The list is exactly one transposition away: exchange the values at the
last two positions.
```

### Example 3

```text
Input: nums = [5,50,500]
Output: 0
Explanation:
Every number here has digit sum 5, so the value tiebreak decides and the
list already sits in the goal ranking — nothing to swap.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- All values in `nums` are distinct positive integers.

## Hints

### Hint 1

Build the goal ranking first: sort by the pair (digit sum, value) — the
value tiebreak is what makes the ranking total. Then record, for every
element, the position it must land on.

### Hint 2

With targets fixed, the rearrangement is a permutation. One swap settles
at most one element of a cycle, and the last element of a cycle drops
into place for free, so a cycle of length L costs L - 1 swaps; the answer
is n minus the number of cycles.
