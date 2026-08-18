# Bounded Peak Subarrays

## Description

Call any run of one or more neighbouring entries of `nums` a *window*, and call
the biggest entry inside a window its *peak*. Report how many windows have a
peak that is at least `left` and at most `right`.

A window is fixed by where it begins and where it ends, so two windows carrying
equal values are still two windows. The data is chosen so the tally fits in a
signed 32-bit integer.

### Example 1

```text
Input: nums = [1,5,2,3,6], left = 3, right = 5
Output: 8
Explanation: Eight windows peak inside the band: [5], [1,5], [5,2], [1,5,2],
[5,2,3], [1,5,2,3], [2,3] and [3]. Every window reaching the final 6 peaks too
high, and [1] and [2] alone peak too low.
```

### Example 2

```text
Input: nums = [7,1,7,1,7], left = 2, right = 6
Output: 0
Explanation: A window that touches a 7 peaks above the band, and a window made
only of 1s peaks below it. Nothing is left.
```

### Example 3

```text
Input: nums = [4,4,4], left = 1, right = 4
Output: 6
Explanation: Every entry sits inside the band, so all six windows qualify.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= left <= right <= 10^9`

## Hints

### Hint 1

Testing a peak against two bounds at once is awkward. Counting windows whose
peak stays under a single ceiling is far easier — and the band is the
difference between two such counts.

### Hint 2

Fix a ceiling `B` and walk the array once, remembering how many consecutive
entries ending at the current position are all at most `B`. Each position
closes exactly that many windows that never exceed `B`.

### Hint 3

An entry above `B` can belong to none of them, so it wipes the running length
back to zero. Do the walk with ceiling `right`, do it again with ceiling
`left - 1`, and subtract; the second walk is empty when `left` is `0`.
