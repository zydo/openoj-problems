# Removing Pairs At One Score II

## Description

You are given an integer array `nums`.

While `nums` holds at least two elements, you may repeatedly delete one of
these pairs:

- the first two elements of `nums`, or
- the last two elements of `nums`, or
- the first and the last elements of `nums`.

Each deletion's score is the sum of the two elements removed, and every
deletion in the sequence must produce the same score.

Return the greatest number of deletions that can be performed this way.

### Example 1

```text
Input: nums = [5,2,3,4,1,6]
Output: 3
Explanation: Play all with score 7:
- Delete the first two elements, 5 + 2 = 7, leaving [3,4,1,6].
- Delete the last two elements, 1 + 6 = 7, leaving [3,4].
- Delete the first two elements, 3 + 4 = 7, leaving [].
The array is empty, so 3 deletions were performed.
```

### Example 2

```text
Input: nums = [3,5,3,4]
Output: 1
Explanation: The three possible opening deletions score 8 (first two),
7 (last two), and 7 (outer pair). Whichever is chosen, the remaining two
elements sum to a different value, so a second deletion at the same score
is impossible and the answer is 1.
```

### Example 3

```text
Input: nums = [1,1,1,1]
Output: 2
Explanation: Every pair of ones sums to 2, so two deletions empty the
array, all sharing the score 2.
```

### Constraints

- `2 <= nums.length <= 2000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

The first deletion's sum fixes the score for the entire sequence, and that
first pair is one of only three: the two head elements, the two tail
elements, or the two outer elements. Only those three candidate scores need
be tried.

### Hint 2

For a fixed score, work on windows of the array: any allowed deletion removes
two elements from one end or both ends, so the window shrinks by two each
step. Let `dp` over window widths hold the longest same-score deletion chain
achievable inside each window, and take the best result across the three
candidate scores.
