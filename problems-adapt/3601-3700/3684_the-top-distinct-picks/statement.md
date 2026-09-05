# The Top Distinct Picks

## Description

You are given an array of positive integers `nums` and an integer `k`.

Assemble a set of values drawn from `nums` whose total is as large as
possible. Two rules apply: the set may contain at most `k` values, and every
value in it must be different from the others — a number that shows up many
times in `nums` can still be taken just once.

Return the chosen values sorted from largest to smallest, with no repeats.

### Example 1

```text
Input: nums = [12,7,19,12,5], k = 2
Output: [19,12]
Explanation: With only two picks allowed, taking 19 and 12 gives the best
total of 31. The second 12 is the same value again, so it cannot be picked
a second time.
```

### Example 2

```text
Input: nums = [4,9,9,2], k = 4
Output: [9,4,2]
Explanation: Four picks are permitted but only three distinct values exist,
so all of them are taken and the sum is 15.
```

### Example 3

```text
Input: nums = [8,3,15,6,15,8,1], k = 3
Output: [15,8,6]
Explanation: The duplicates of 15 and 8 contribute nothing extra. The three
largest distinct values 15, 8 and 6 sum to 29, which no other legal choice
beats.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= nums.length`

## Hints

### Hint 1

Duplicates can never help: taking the same value twice is forbidden, and
every value is positive, so an unused distinct value is always the better
spend of a pick. Reduce `nums` to its distinct values, order them from
largest down, and keep the first `k` — or everything, if fewer than `k`
survive the dedup.
