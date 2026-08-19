# Sum of Subsequence Tightness

## Description

You are given an integer array `nums` of length `n` and a positive integer
`k`.

The **tightness** of a subsequence is the smallest absolute difference
between any two of its elements — two equal elements make it `0`.

Add up the tightness of every subsequence of `nums` with length exactly
`k`, and return the total modulo `10⁹ + 7`. (A subsequence keeps the
array's order and drops any elements; two subsequences built from
different index sets count separately even when their values match.)

### Example 1

```text
Input: nums = [1,2,4,8], k = 3
Output: 7
Explanation: Choosing any three of the four values gives [1,2,8],
[1,4,8], [2,4,8], and the triple holding 1, 2, and 4. Their closest
pairs measure 1, 3, 2, and 1, so the tightness values sum to
1 + 3 + 2 + 1 = 7.
```

### Example 2

```text
Input: nums = [5,5,7], k = 2
Output: 4
Explanation: The pairs are (5,5) with tightness 0, and two copies of
(5,7) with tightness 2 — each uses a different 5. Total 0 + 2 + 2 = 4.
```

### Example 3

```text
Input: nums = [-6,1,4], k = 2
Output: 20
Explanation: |-6-1| = 7, |-6-4| = 10, and |1-4| = 3, summing to 20.
```

### Constraints

- `2 <= n == nums.length <= 50`
- `-10⁸ <= nums[i] <= 10⁸`
- `2 <= k <= n`

## Hints

### Hint 1

Sorting the array first loses nothing: tightness depends on values, not
positions.

### Hint 2

After sorting, the closest pair in a chosen set is a pair of consecutive
chosen elements, and there are at most `n^2` candidate values for it.

### Hint 3

For a threshold `d`, count length-`k` sets whose consecutive gaps all
reach `d` — those are precisely the sets of tightness at least `d`.

### Hint 4

Walk the distinct candidate values from largest to smallest; the count
that appears at `d` but not at the next larger threshold is the number of
sets whose tightness is exactly `d`, and each such step contributes
`d * count` to the total.
