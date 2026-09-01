# Largest Total Divisible by Three

## Description

Given an integer array `nums`, choose any subset of its elements and add
them up. Return the largest possible total that is divisible by three. If
no non-empty choice of elements adds up to a multiple of three, the answer
is `0` (choosing nothing is always allowed).

### Example 1

```text
Input: nums = [2,7,4,9]
Output: 18
Explanation: Take 2, 7, and 9, leaving 4 out — the total 18 is divisible by
3 and no larger legal total exists.
```

### Example 2

```text
Input: nums = [5]
Output: 0
Explanation: The only element is not a multiple of 3, so nothing is chosen.
```

### Example 3

```text
Input: nums = [1,2,3,4]
Output: 9
Explanation: Dropping the 1 from the full total of 10 yields 9.
```

### Constraints

- `1 <= nums.length <= 4 * 10^4`
- `1 <= nums[i] <= 10^4`

## Hints

### Hint 1

Only the running total's remainder matters, not which elements produced
it — keep one champion sum for each remainder class `0`, `1`, `2`.

### Hint 2

Process the array left to right. Each new element tries to improve every
champion by appending itself; after the last element, the champion of
remainder `0` is the answer.
