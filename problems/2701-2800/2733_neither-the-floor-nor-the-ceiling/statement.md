# Neither The Floor Nor The Ceiling

## Description

You are given an array `nums` of distinct positive integers. Pick out any
one element whose value is strictly between the array's smallest and
largest values — the floor and the ceiling themselves don't count — and
return it. When no such element exists, return `-1`.

### Example 1

```text
Input: nums = [30,10,20]
Output: 20
Explanation: The floor is 10 and the ceiling is 30, and 20 is the only value sitting strictly between them.
```

### Example 2

```text
Input: nums = [5,9]
Output: -1
Explanation: With two elements, each one is simultaneously a floor or a ceiling of the array, so nothing lies strictly between.
```

### Example 3

```text
Input: nums = [40,12,77,55,8]
Output: 40
Explanation: The floor is 8 and the ceiling is 77, so 12, 40, and 55 all qualify; 40 is returned here.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- All the values in `nums` are different

## Hints

### Hint 1

Any three distinct values always contain a legal answer: the middle of
the trio beats one companion and loses to the other, so it can be neither
the array's floor nor its ceiling.
