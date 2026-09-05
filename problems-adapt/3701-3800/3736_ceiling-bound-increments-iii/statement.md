# Ceiling-Bound Increments III

## Description

An integer array `nums` is laid out in front of you. A move consists of
choosing exactly one element and bumping it up by one. Nothing can ever go
down.

Work out the smallest number of moves after which every element of `nums`
holds one common value.

### Example 1

```text
Input: nums = [8,3,5]
Output: 8
Explanation: Elements only rise, so the array settles on its largest
value, 8. The 3 has to climb five steps and the 5 three steps, and the 8
stays put: 5 + 3 = 8 moves in total, and nothing shorter can equalize the
array.
```

### Example 2

```text
Input: nums = [6,6,7,4]
Output: 5
Explanation: The common value is 7. Each 6 needs one bump, the 7 needs
none, and the 4 needs three, giving 1 + 1 + 3 = 5 moves.
```

### Example 3

```text
Input: nums = [2,9,4,7]
Output: 14
Explanation: Every element ends at 9: the 2 climbs seven steps, the 4
five, the 7 two, and the 9 none — 7 + 5 + 2 = 14 moves.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Since values never decrease, the shared final value cannot sit below the
array's largest element — and aiming any higher only wastes moves.
