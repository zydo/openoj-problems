# Peak Factor Score After One Cut

## Description

Call an array's factor score the product of two of its aggregates: the
GCD of all its elements times the LCM of all its elements.

Given an integer array nums, you may delete at most one element from it
— deleting nothing is allowed. Return the largest factor score any such
version of nums can reach.

Two conventions to keep in mind: for a one-element array the GCD and
the LCM are both that element itself, and an empty array's factor score
is 0.

### Example 1

```text
Input: nums = [6,10,15]
Output: 150
Explanation: Cutting the 6 leaves [10,15], whose GCD is 5 and LCM is
30 — a factor score of 5 * 30 = 150. Keeping everything only scores
1 * 30 = 30.
```

### Example 2

```text
Input: nums = [9,6,12,3]
Output: 108
Explanation: Removing nothing is best: the GCD is 3 and the LCM is 36,
so the score is 3 * 36 = 108; every possible cut lands lower.
```

### Example 3

```text
Input: nums = [7,11]
Output: 121
Explanation: Dropping the 7 leaves the single element 11, and a lone
element scores itself squared: 11 * 11 = 121.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 30`

## Hints

### Hint 1

Trying every possible single deletion is already a workable plan — two
nested passes suffice.

### Hint 2

Prefix and suffix folds of the running GCD and LCM turn each deletion
into a constant-time join.
