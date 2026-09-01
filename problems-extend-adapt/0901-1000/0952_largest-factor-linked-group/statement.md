# Largest Factor-Linked Group

## Description

The array `nums` contains distinct positive integers. Picture a graph with
one node per value: values `i` and `j` are connected directly whenever
`nums[i]` and `nums[j]` have a common divisor strictly greater than 1.

Return how many nodes belong to the largest connected piece of that graph.

### Example 1

![diagram](figures/952-1.svg)

```text
Input: nums = [4,6,15,35]
Output: 4
Explanation: 4 links to 6 through the divisor 2, 6 links to 15 through 3,
and 15 links to 35 through 5, so a chain of shared factors threads all
four values together.
```

### Example 2

![diagram](figures/952-2.svg)

```text
Input: nums = [20,50,9,63]
Output: 2
Explanation: 20 and 50 are linked (both 2 and 5 divide them) and 9 and 63
are linked through 3, but no value from the first pair connects to one
from the second, so the biggest piece spans only 2 nodes.
```

### Example 3

![diagram](figures/952-3.svg)

```text
Input: nums = [2,3,6,7,4,12,21,39]
Output: 8
Explanation: The even values 2, 4, 6, and 12 connect over 2, the values
divisible by 3 connect over 3, and 7 meets 21 through 7; every value ends
up reachable from every other, giving a single piece of 8 nodes.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 10⁵`
- Every element of `nums` is distinct.
