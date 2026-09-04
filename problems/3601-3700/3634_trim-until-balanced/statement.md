# Trim Until Balanced

## Description

Call an integer array **balanced** when its largest value is at most `k`
times its smallest value. You are given an array `nums` and an integer `k`.
Elements may be deleted freely — any elements, in any number — as long as at
least one element survives. Return the fewest deletions after which whatever
remains is balanced.

A single surviving element is balanced on its own: its largest value and its
smallest value are the same element.

### Example 1

```text
Input: nums = [8,3,20,7], k = 3
Output: 1
Explanation: Deleting 20 leaves [8,3,7], whose largest value 8 is at most
three times its smallest value 3. No array that still contains 20 qualifies,
because 20 exceeds 3 * 3.
```

### Example 2

```text
Input: nums = [5,100,6,1,2], k = 4
Output: 2
Explanation: Keeping [2,5,6] works, since 6 is at most four times 2, so two
deletions (removing 1 and 100) are enough. One deletion can never help:
any four surviving elements either include 100, which overwhelms factor 4,
or keep 1 alongside 5 and 6, which breaks the factor as well.
```

### Example 3

```text
Input: nums = [2,4,8,16,32], k = 2
Output: 3
Explanation: Keeping [4,8] is balanced because 8 equals twice 4. Every
larger survivor set spans a ratio greater than 2, so three deletions are
forced.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁵`

### Hint 1

Sorting `nums` lines the survivors up: a balanced set can always be chosen
as one contiguous run of the sorted array.

### Hint 2

Slide a window over the sorted array, growing the right end while it stays
within a factor `k` of the left end. The longest such run saves the most
elements; the answer is how many lie outside it.
