# Smallest Digit Sum

## Description

You are given an integer array `nums`.

Every number in the array is rewritten as the sum of its own digits.
Once all numbers have been rewritten this way, report the smallest
value the array then holds.

### Example 1

```text
Input: nums = [21,5,300]
Output: 3
Explanation: The digit sums are 3, 5 and 3, so the rewritten array is
[3, 5, 3] and its minimum is 3.
```

### Example 2

```text
Input: nums = [48,7,91]
Output: 7
Explanation: Rewriting gives [12, 7, 10]; the smallest of these is 7.
```

### Example 3

```text
Input: nums = [10,99]
Output: 1
Explanation: 10 becomes 1 and 99 becomes 18, so the minimum is 1.
```

### Constraints

- The array holds between 1 and 100 numbers.
- Every number is between 1 and 10⁴.

## Hints

### Hint 1

Each element is rewritten on its own, so nothing couples them: the
answer is simply the smallest digit sum found anywhere in the array.

### Hint 2

Peel a number's digits off with repeated division by 10, or read them
off its string form — either way you only ever add, never multiply.
