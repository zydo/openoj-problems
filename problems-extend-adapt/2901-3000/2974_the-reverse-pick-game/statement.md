# The Reverse-Pick Game

## Description

You are given a 0-indexed integer array `nums` whose length is even, and
an empty result array `arr`. Alice and Bob take turns with `nums` until
it is empty, playing the same two-step round over and over:

- Alice removes the smallest value left in `nums`, then Bob removes the
  smallest value left after that.
- The two removed values are appended to `arr` in reverse order of who
  picked them: Bob's pick goes in first, then Alice's.

Return the array `arr` once `nums` runs out.

### Example 1

```text
Input: nums = [7,1,9,3]
Output: [3,1,9,7]
Explanation: Round one: Alice takes 1 and Bob takes 3, and they are
appended as 3 then 1, so arr = [3,1]. Round two starts from
nums = [7,9]: Alice takes 7, Bob takes 9, and appending gives
arr = [3,1,9,7].
```

### Example 2

```text
Input: nums = [4,6]
Output: [6,4]
Explanation: The single round has Alice take 4 and Bob take 6; Bob's 6
is appended before Alice's 4, leaving arr = [6,4].
```

### Example 3

```text
Input: nums = [2,2,5,1]
Output: [2,1,5,2]
Explanation: Round one: Alice takes 1 and Bob takes a 2, appended as 2
then 1, so arr = [2,1]. Round two starts from nums = [2,5]: Alice takes
2 and Bob takes 5, appended as 5 then 2, leaving arr = [2,1,5,2].
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `nums.length` is guaranteed to be even.

## Hints

### Hint 1

In sorted order, every round consumes exactly one neighboring pair of
values.

### Hint 2

Because each round appends the larger of the pair before the smaller,
the answer is simply the sorted array with every adjacent pair
exchanged.
