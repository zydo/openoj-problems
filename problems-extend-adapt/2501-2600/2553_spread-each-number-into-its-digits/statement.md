# Spread Each Number Into Its Digits

## Description

You are given an array `nums` of positive integers. Lay every digit of
every number out into one flat result array, element by element in the
order they appear in `nums`, each number contributing its own digits
left to right.

Spreading a single integer means writing out its digits in their usual
reading order. For example, the integer 10921 spreads into
`[1,0,9,2,1]`.

### Example 1

```text
Input: nums = [24,105,8]
Output: [2,4,1,0,5,8]
Explanation: 24 spreads to [2,4], 105 spreads to [1,0,5] — the
interior 0 is kept — and 8 spreads to [8]. Concatenating those pieces
in order gives the result.
```

### Example 2

```text
Input: nums = [9,90,900]
Output: [9,9,0,9,0,0]
Explanation: Trailing zeros belong to a number just as much as any
other digit, so 90 yields [9,0] and 900 yields [9,0,0].
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Process the input one number at a time and append that number's digits
to the growing result before moving on.

### Hint 2

Repeated division by ten peels digits off in reverse reading order;
collect them into a small scratch buffer and flush it backwards, or
simply convert the number to a string and copy its characters.
