# Half-Array Repeated Element

## Description

An integer array `nums` arrives with a built-in promise. Its length is
`2 * n`, and one of its values appears `n` times — that is, it fills
half of the array. Every other slot is taken by a value that occurs
exactly once. Altogether the array therefore holds `n + 1` distinct
values: the half-filling repeat and `n` singletons.

Report the value that takes up half of `nums`.

### Example 1

```text
Input: nums = [8,3,8,1]
Output: 8
Explanation: The length 4 gives n = 2. The values 3 and 1 appear once
each, and 8 supplies the other two slots — n of them — so 8 is the
half-array repeat.
```

### Example 2

```text
Input: nums = [2,6,7,6,6,4]
Output: 6
Explanation: Here n = 3. The singletons are 2, 7, and 4, while 6 lands
in the remaining three slots scattered between them.
```

### Example 3

```text
Input: nums = [9,5,9,1,9,3,9,0]
Output: 9
Explanation: Here n = 4. Values 5, 1, 3, and 0 each occur once, and 9
occupies the other half of the array.
```

### Constraints

- `2 <= n <= 5000` and `nums.length == 2 * n`
- `0 <= nums[i] <= 10⁴`
- `nums` holds exactly `n + 1` distinct values, one of them occurring
  precisely `n` times and the rest once each.
