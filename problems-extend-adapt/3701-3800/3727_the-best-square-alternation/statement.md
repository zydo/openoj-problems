# The Best Square Alternation

## Description

You are given an integer array `nums`, and you may shuffle its elements
into whatever order you like before the array is scored.

An ordering `arr` receives the alternating score:

```text
score = arr[0]² - arr[1]² + arr[2]² - arr[3]² + ...
```

Entries at even indices count positively; entries at odd indices count
negatively.

Return the largest score any ordering of `nums` can achieve.

### Example 1

```text
Input: nums = [4,-1,5]
Output: 40
Explanation: Ordering the elements as [4,-1,5] is optimal:
score = 4² - (-1)² + 5² = 16 - 1 + 25 = 40.
```

### Example 2

```text
Input: nums = [2,2,2,9]
Output: 77
Explanation: The ordering [2,2,9,2] gives
score = 2² - 2² + 9² - 2² = 4 - 4 + 81 - 4 = 77, and no arrangement
beats it.
```

### Example 3

```text
Input: nums = [-3,-3,3]
Output: 9
Explanation: Squares erase signs, so every ordering of these three
elements scores the same: 9 - 9 + 9 = 9.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-4 * 10⁴ <= nums[i] <= 4 * 10⁴`

## Hints

### Hint 1

Squaring wipes out signs, so only the magnitudes of the elements — as a
multiset of squares — survive to be scored.

### Hint 2

An exchange argument settles the assignment: whenever a bigger square
sits on a minus slot while a smaller one sits on a plus slot, swapping
the pair strictly raises the score. So the largest ceil(n / 2) squares
take the plus slots.

### Hint 3

Sort the squares and split the list in the middle; the answer is the sum
of the upper part minus the sum of the lower part. Accumulate in 64-bit
integers — one square alone already passes 10⁹.
