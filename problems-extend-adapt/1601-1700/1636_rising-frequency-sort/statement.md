# Rising Frequency Sort

## Description

Rearrange an array of integers `nums` so that rarer values come first:
order the elements by ascending frequency of their value within `nums`.
When two different values occur equally often, place the larger value
before the smaller one.

Return the rearranged array.

### Example 1

```text
Input: nums = [6,1,1,9,9,9,4]
Output: [6,4,1,1,9,9,9]
Explanation: 6 and 4 each occur once and lead the array in decreasing
order; 1 occurs twice; 9 occurs three times.
```

### Example 2

```text
Input: nums = [3,3,-2,7,7,0]
Output: [0,-2,7,7,3,3]
Explanation: 0 and -2 occur once each, and the larger 0 comes first. 3
and 7 occur twice each, and the larger 7 comes first.
```

### Example 3

```text
Input: nums = [-1,-1,-1,2,2,-3]
Output: [-3,2,2,-1,-1,-1]
Explanation: -3 is the rarest value, followed by the two 2s, then the
three -1s.
```

### Constraints

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

First count how many times every distinct value occurs.

### Hint 2

Sort with a two-part key: the frequency ascending, and — for equal
frequencies — the value itself in descending order.
