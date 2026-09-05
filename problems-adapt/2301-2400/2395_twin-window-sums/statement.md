# Twin Window Sums

## Description

You are given an integer array `nums`. Look at every stretch of two
neighboring elements — the pairs `nums[i]`, `nums[i + 1]` for each valid
`i`. Decide whether two of these stretches, taken from different
starting positions, add up to the same total. The stretches may well
hold identical values; what separates them is where they begin.

Return `true` when such a matching pair of stretches exists, and
`false` otherwise.

### Example 1

Input: nums = [7,3,7,3]
Output: true
Explanation: The first two elements sum to 10 and the middle two also
sum to 10, so two windows share a total.

### Example 2

Input: nums = [1,2,3,4]
Output: false
Explanation: The window totals are 3, 5, and 7 — all distinct.

### Example 3

Input: nums = [-5,5,-5,5]
Output: true
Explanation: Both the opening window and the one after it sum to 0.

### Constraints

- `2 <= nums.length <= 1000`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Each adjacent pair contributes one candidate total, and there are only
n−1 of them.

### Hint 2

Drop each total into a set as you sweep; the first one already sitting
in the set settles the answer.
