# Sorting Within Bit Groups

## Description

You are given an array `nums` of positive integers, indexed from 0.

One operation picks two neighboring elements and exchanges them, but only
if the two values have the same number of set bits in binary. You may
perform the operation as many times as you like, or not at all.

Decide whether some sequence of operations can leave `nums` in ascending
order. Return `true` if it can and `false` otherwise.

### Example 1

```text
Input: nums = [1,3,8,12,10]
Output: true
Explanation: Counting set bits, 1 has one, 3 has two, 8 has one, and 12
and 10 have two each. So the array divides into runs [1], [3], [8], and
[12,10], and elements can only ever move within their own run. Swapping 12
with 10 turns the last run into [10,12], and the whole array becomes
1,3,8,10,12 — sorted, so the answer is true.
```

### Example 2

```text
Input: nums = [12,6,2,1]
Output: false
Explanation: Here 12 and 6 have two set bits while 2 and 1 have one, so
nothing from the pair [12,6] may ever cross anything from the pair [2,1].
But a sorted arrangement would need 12 to end up to the right of both 2
and 1, which no sequence of swaps can achieve. The answer is false.
```

### Example 3

```text
Input: nums = [9,3,5]
Output: true
Explanation: All of 9, 3, and 5 have exactly two set bits, so the entire
array forms one freely reorderable run and can always be arranged as
3,5,9.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 28`

## Hints

### Hint 1

Elements can only trade places with a neighbor of the same popcount, so
cut the array into maximal runs of equal-popcount neighbors: each run can
be rearranged at will, but nothing ever leaves its run.

### Hint 2

The whole array can be sorted exactly when each run's smallest element
still exceeds every value sitting in the runs before it.
