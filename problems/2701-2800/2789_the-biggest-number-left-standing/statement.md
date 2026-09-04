# The Biggest Number Left Standing

## Description

You start from an array `nums` of positive integers, indexed from 0.

One move acts on a neighboring pair whose left member does not exceed its
right member — an index `i` with `0 <= i < nums.length - 1` and
`nums[i] <= nums[i + 1]`. The right element absorbs the left one:
`nums[i + 1]` becomes their sum, `nums[i]` is removed, and the array
shrinks by one.

Carry out moves as many times as you like, in any order. Return the
largest value that can appear in the array when you stop.

### Example 1

```text
Input: nums = [4,6,3,2,8]
Output: 23
Explanation: Merge from the right outward while each pair stays legal:
- i = 3 gives [4,6,3,10]
- i = 2 gives [4,6,13]
- i = 1 gives [4,19]
- i = 0 gives [23]
The single survivor is 23, and no sequence of moves yields anything
larger.
```

### Example 2

```text
Input: nums = [9,1,1,4]
Output: 9
Explanation: Merging at i = 2 gives [9,1,5], and merging at i = 1 gives
[9,6]. Now the pair (9, 6) fails the test because 9 > 6, so the pile on
the right can never reach the 9, and 9 is the biggest element that can
remain.
```

### Example 3

```text
Input: nums = [5,5,5]
Output: 15
Explanation: Equal neighbors merge: i = 0 gives [10,5], and i = 0 again
gives [15].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Sweep the array from its final element back to the first while holding
one running total — what the already-processed suffix can present to the
element on its left.

### Hint 2

Each next element at most equal to the running total folds into it;
anything larger starts a fresh total. The answer is the biggest total
the sweep ever holds.
