# The Largest Gathering

## Description

An array of integers starts scattered, and you get to pull some of its
values together. You are given `nums` together with a reach `k` and a
budget of `numOperations` moves. Each move picks one index that no earlier
move has touched and adds some single integer between `-k` and `k`
(inclusive) to the value there.

Every index is adjustable at most once, and a move is allowed to add `0`,
which changes nothing. Once the moves are done, look at how often the most
common value appears. Return the largest that frequency can be made.

### Example 1

```text
Input: nums = [7, 7, 7], k = 0, numOperations = 0
Output: 3
Explanation: The values are already all equal, so the frequency of 7 is 3
even though no moves are available.
```

### Example 2

```text
Input: nums = [2, 3, 9], k = 1, numOperations = 2
Output: 2
Explanation: Move 2 up to 3 (a shift of 1, within reach), then spend the
other move adding 0. The array holds two 3s, and 9 is too far from
anything else to help.
```

### Example 3

```text
Input: nums = [1, 1, 3, 4, 5], k = 2, numOperations = 2
Output: 3
Explanation: Keep the 3 where it is and move both 4 and 5 down to 3 — each
shift is 1 or 2, within reach of k = 2. Three entries now read 3.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `0 <= k <= 10^5`
- `0 <= numOperations <= nums.length`

### Hints

- Sort the values. Whatever final target value you pick, every element that
  can join it lies inside a window of width `2k` around that target.
- Elements already sitting on the target are free; every other member of
  the window consumes one of the moves.
