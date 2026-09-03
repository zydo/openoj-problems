# The Smallest Affordable Step

## Description

You are given an array `nums` of positive integers.

One operation picks any index `i` and lowers `nums[i]` by a fixed amount
`k`, where `k` is a positive integer you choose up front. Let
`work(nums, k)` be the fewest such operations that bring every element of
`nums` down to a non-positive value.

Pick `k` as small as possible while keeping that work within the budget the
choice itself creates: return the smallest `k` such that
`work(nums, k) <= k²`.

### Example 1

```text
Input: nums = [8,3,5,1]
Output: 3
Explanation: With k = 3, work(nums, 3) = 7 and the budget is 3² = 9.

    nums[0] = 8 needs three lowers: 8 -> 5 -> 2 -> -1.
    nums[1] = 3 needs one lower: 3 -> 0.
    nums[2] = 5 needs two lowers: 5 -> 2 -> -1.
    nums[3] = 1 needs one lower: 1 -> -2.

Seven lowers fit. With k = 2 the same elements need 4 + 2 + 3 + 1 = 10
lowers, but the budget is only 2² = 4.
```

### Example 2

```text
Input: nums = [2,10]
Output: 3
Explanation: With k = 3 the elements need ceil(2/3) + ceil(10/3) =
1 + 4 = 5 lowers, and 5 <= 3². With k = 2 they need 1 + 5 = 6 lowers,
which exceeds 2².
```

### Example 3

```text
Input: nums = [100000]
Output: 47
Explanation: With k = 47 the single element needs ceil(100000/47) = 2128
lowers, just inside the budget 47² = 2209. With k = 46 it needs 2174
lowers, over the 46² = 2116 budget.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

An element of value `v` needs exactly `ceil(v / k)` lowers, and elements
never interact, so the work is just the sum of those ceilings.

### Hint 2

Bigger `k` shrinks every ceiling while the budget `k²` only grows, so
"within budget" is a property that, once true, stays true. Search the
smallest `k` that has it.
