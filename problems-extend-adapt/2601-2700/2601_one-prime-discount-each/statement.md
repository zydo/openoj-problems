# One Prime Discount Each

## Description

You are given an integer array `nums`. Each element may receive at most one
discount: pick an index together with a prime number that is strictly
smaller than the value currently at that index, and subtract that prime
from the value. Distinct indices may receive distinct discounts, and you
may discount as many indices as you like — or none at all.

Return `true` if some set of discounts can leave the array strictly
increasing, meaning every element is greater than the one before it, and
`false` otherwise.

### Example 1

```text
Input: nums = [8,4,7]
Output: true
Explanation: Subtract 7 from the 8, then 2 from the 4, then 3 from the 7.
The array becomes [1,2,4], which is strictly increasing.
```

### Example 2

```text
Input: nums = [2,5,9]
Output: true
Explanation: The array is strictly increasing already, so no discount is
needed.
```

### Example 3

```text
Input: nums = [2,2]
Output: false
Explanation: The two equal values can never be pulled apart. A discount
only lowers a value, and no prime is strictly smaller than 2, so neither
element can shrink.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Hints

### Hint 1

Work through the array from left to right. Once the final value of element
`i - 1` is settled, which prime (if any) should element `i` take?

### Hint 2

For each element you want the largest prime that keeps the result as small
as possible while still staying above the previous element's final value.
