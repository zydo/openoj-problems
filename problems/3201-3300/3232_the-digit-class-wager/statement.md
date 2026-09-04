# The Digit-Class Wager

## Description

Given an array of positive integers `nums`, Alice and Bob settle a simple
wager over it. Alice has to claim one of two classes whole: either every
one-digit value in `nums`, or every two-digit value in `nums`. Whichever
class she passes over goes to Bob. Alice takes the wager when the sum of
the class she claimed is strictly greater than the sum of the class Bob
was handed — an exact tie pays her nothing.

Decide whether Alice has a winning move available, and return `true` if
she does, `false` otherwise.

### Example 1

```text
Input: nums = [11,5,6]
Output: false
Explanation: The one-digit numbers sum to 11 and the two-digit numbers
also sum to 11, so neither class strictly beats the other.
```

### Example 2

```text
Input: nums = [25,4,6]
Output: true
Explanation: Claiming the two-digit class gives Alice a sum of 25 against
Bob's 10.
```

### Example 3

```text
Input: nums = [13,2,3,4,5]
Output: true
Explanation: Claiming the one-digit class gives Alice a sum of 14 against
Bob's 13.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 99`

## Hints

### Hint 1

Only two candidate moves exist, and each move fixes both players' totals
at once, so two running sums settle the entire game.
