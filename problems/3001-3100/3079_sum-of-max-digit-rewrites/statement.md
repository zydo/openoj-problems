# Sum Of Max-Digit Rewrites

## Description

Given an array `nums` of positive integers, rewrite every element once: a
rewrite keeps the number's length but replaces each of its digits with the
largest digit the number contains. Rewriting `523` produces `555`, and
rewriting `213` produces `333`.

Return the total after rewriting every element and adding the results.

### Example 1

```text
Input: nums = [7,91,246]
Output: 772
Explanation: The rewrites are 7 -> 7, 91 -> 99, and 246 -> 666, so the total is 7 + 99 + 666 == 772.
```

### Example 2

```text
Input: nums = [305,48]
Output: 643
Explanation: 305 rewrites to 555 and 48 rewrites to 88, giving 555 + 88 == 643.
```

### Example 3

```text
Input: nums = [12,3,400]
Output: 469
Explanation: The rewrites are 22, 3, and 444, which sum to 469.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

A rewrite never changes the digit count, so every rewritten value is the
maximum digit repeated once per digit — `maxDigit` times a repunit.
