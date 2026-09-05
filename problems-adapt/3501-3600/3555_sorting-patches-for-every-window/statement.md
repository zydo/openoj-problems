# Sorting Patches For Every Window

## Description

Given an integer array `nums` and a window width `k`, slide a window of
`k` consecutive elements across `nums` from left to right. Inside a
window, some contiguous stretch may sit out of order; sorting just that
stretch in place can be enough to leave the whole window non-decreasing.

For every window, report the length of the shortest stretch that does the
job — a window already in non-decreasing order reports `0`. Return the
answers as an array of length `n − k + 1`, one entry per window in the
order the windows appear.

### Example 1

```text
Input: nums = [7,9,8,6,10], k = 4
Output: [4,3]
Explanation:
The first window [7, 9, 8, 6] needs everything from the 7 through the 6
re-sorted — all four positions — to become [6, 7, 8, 9]. The second
window [9, 8, 6, 10] already leaves the trailing 10 in a fine final
spot; sorting [9, 8, 6] into [6, 8, 9] settles it, so the answer is 3.
```

### Example 2

```text
Input: nums = [1,2,3,4,5], k = 3
Output: [0,0,0]
Explanation:
Every window is already non-decreasing, so no stretch needs sorting
anywhere.
```

### Example 3

```text
Input: nums = [10,20,30,25,40,35,50], k = 5
Output: [2,4,4]
Explanation:
Window [10, 20, 30, 25, 40]: only the drop from 30 to 25 is out of
order, a stretch of length 2. Window [20, 30, 25, 40, 35]: the 25 and
the 35 both sit in wrong company, and sorting from the 30 through the
35 settles the window. Window [30, 25, 40, 35, 50]: the run from the 30
through the 35 must be re-sorted, while the trailing 50 can stay.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= k <= nums.length`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Treat each window as its own little problem — nothing about one window's
answer helps its neighbor.

### Hint 2

For a single window, find how far the disorder reaches in each direction:
the stretch must run right through the last element smaller than
something before it, and left through the first element larger than
something after it. If neither scan finds such an element, the window is
already sorted.
