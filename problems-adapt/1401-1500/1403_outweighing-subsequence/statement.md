# Outweighing Subsequence

## Description

Pick a subsequence of `nums` — what remains after erasing any number of
elements, possibly none — whose element sum is strictly greater than the
sum of everything erased.

Among all such picks, return one with the fewest elements; if several
picks tie on size, the answer is the one with the largest possible sum.
The data guarantees this pick is unique, and it must be returned sorted
from largest element to smallest.

### Example 1

```text
Input: nums = [8,3,1,8,5]
Output: [8,8]
Explanation: The two 8s sum to 16, strictly more than the remaining
1 + 3 + 5 = 9, and no single element outweighs the rest.
```

### Example 2

```text
Input: nums = [1,1,1,1,1,1,1]
Output: [1,1,1,1]
Explanation: Four of the seven 1s (sum 4) strictly outweigh the three
left behind (sum 3).
```

### Example 3

```text
Input: nums = [9]
Output: [9]
Explanation: The whole array is the only subsequence that outweighs the
empty remainder.
```

### Constraints

- `1 <= nums.length <= 500`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Every element is positive, so the fewest-elements pick is always built
from the very largest values: sort `nums` in descending order.

### Hint 2

Walk down the sorted values accumulating a running sum; the first prefix
whose sum strictly exceeds half the array total is the answer, and it is
already in non-increasing order.
