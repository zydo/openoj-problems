# Score of the Smallest-First Sweep

## Description

You are given an array `nums` of positive integers, and a score that
starts at zero. Repeat the following until nothing is left unmarked:

- Find the smallest value that is still unmarked; on a tie, take the
  leftmost such position.
- Add that value to the score.
- Strike off the chosen position together with each neighbor directly
  beside it.

Return the score once every position has been struck off.

### Example 1

```text
Input: nums = [3,1,2,4]
Output: 5
Explanation: The 1 at index 1 is smallest, so it and both neighbors are
taken and the score reaches 1. Only the 4 at index 3 survives, and
choosing it brings the score to 5.
```

### Example 2

```text
Input: nums = [5,2,2,5]
Output: 7
Explanation: The two 2s tie, so the leftmost one at index 1 is chosen
and indices 0 through 2 are all struck, scoring 2. The lone 5 at index
3 remains and lifts the score to 7.
```

### Example 3

```text
Input: nums = [1,1,1]
Output: 2
Explanation: The leftmost 1 is chosen first, striking indices 0 and 1
and scoring 1. The last 1 at index 2 is then chosen, scoring 1 more for
a total of 2.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

The pick order depends only on each value's size, so visiting the
positions sorted by value reproduces every choice the process makes.

### Hint 2

When a position's turn arrives and it has already been struck off as
someone's neighbor, just move past it.
