# Most End-Pair Removals With One Sum

## Description

You are given an array of integers `nums`. While at least two elements
remain, you may remove exactly two of them at a time, and only these three
choices exist:

- the two leftmost elements,
- the two rightmost elements,
- the leftmost and the rightmost element together.

The tally of a removal is the sum of the two elements it takes. Every removal
you make must record the same tally.

Return the largest number of removals you can perform under that rule.

### Example 1

```text
Input: nums = [5,2,3,1,6,4]
Output: 3
Explanation: All three removals tally 7:
- Take the two leftmost, 5 and 2, leaving [3,1,6,4].
- Take the outermost pair, 3 and 4, leaving [1,6].
- Take the two leftmost, 1 and 6, leaving nothing.
Three removals clear the whole array, so nothing more can be done.
```

### Example 2

```text
Input: nums = [4,3,7,2,5]
Output: 2
Explanation: Removing 4 and 3 (tally 7) leaves [7,2,5], whose rightmost pair
2 and 5 also tallies 7. The leftover single element ends the process. No way
to reach three removals exists with five elements.
```

### Example 3

```text
Input: nums = [9,1,2,3,4,5]
Output: 1
Explanation: Whichever pair goes first — 9+1 = 10, 4+5 = 9, or 9+5 = 14 — no
remaining boundary pair repeats that tally, so a single removal is the most
any line of play manages.
```

### Constraints

- `2 <= nums.length <= 2000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

The first removal picks the tally for the whole game. What are the only values
that tally could take?

### Hint 2

Removals only ever eat boundary elements, so after the first one the remaining
elements form a contiguous stretch `nums[l..r]`. For a fixed tally, that
suggests a two-index recurrence.

### Hint 3

Let `dp[l][r]` be the most removals inside `nums[l..r]` at the fixed tally.
Each removal consumes two boundary elements, giving exactly three transitions;
fill the table by increasing stretch length and take the best of the three
possible starting tallies afterwards.
