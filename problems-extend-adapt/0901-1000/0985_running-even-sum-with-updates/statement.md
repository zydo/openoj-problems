# Running Even Sum With Updates

## Description

An integer array `nums` is updated in place by a sequence of queries. Each
query is a pair `[val, index]`: it adds `val` to `nums[index]`, and only
once that update has landed does the query take its reading — the total of
all even values currently in `nums`.

Return one reading per query: the `i`-th entry of the answer is the sum of
the even values of `nums` immediately after the `i`-th query has been
applied.

### Example 1

```text
Input: nums = [2,3,5,6], queries = [[4,1],[-2,0],[1,3]]
Output: [8,6,0]
Explanation: The even values begin as 2 + 6 = 8.
Adding 4 to nums[1] gives [2,7,5,6]; the touched value stays odd, so the
reading is still 8.
Subtracting 2 from nums[0] gives [0,7,5,6]; 0 is even, so the reading is
0 + 6 = 6.
Adding 1 to nums[3] gives [0,7,5,7], which leaves 0 as the only even value.
```

### Example 2

```text
Input: nums = [7], queries = [[3,0]]
Output: [10]
Explanation: The only value starts odd; adding 3 turns it into the even
number 10, which the reading picks up.
```

### Constraints

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `1 <= queries.length <= 10⁴`
- `-10⁴ <= val_i <= 10⁴`
- `0 <= index_i < nums.length`
