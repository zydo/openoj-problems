# Fewest Deletions for a Target XOR

## Description

You are given an integer array `nums` and an integer `target`.

Erase as few entries as possible — zero counts as few — so that the XOR of the
surviving entries comes out to `target`. Report that fewest number of
deletions, or `-1` when no selection of survivors ever XORs to `target`.

An empty line of survivors XORs to `0`.

### Example 1

```text
Input: nums = [2,3,5], target = 6
Output: 1
Explanation:
Delete the 2. The survivors 3 and 5 satisfy 3 XOR 5 = 6, and no zero-deletion
arrangement works: 2 XOR 3 XOR 5 is 4.
```

### Example 2

```text
Input: nums = [11,2], target = 7
Output: -1
Explanation:
The four survivor sets XOR to 0, 2, 11, and 9. None equals 7, so the target
is out of reach.
```

### Example 3

```text
Input: nums = [7,7], target = 0
Output: 0
Explanation:
Both sevens can stay: a value XORed with itself cancels, so 7 XOR 7 is 0 and
nothing needs deleting.
```

### Constraints

- `1 <= nums.length <= 40`
- `0 <= nums[i] <= 10^4`
- `0 <= target <= 10^4`

## Hints

### Hint 1

Deletions and survivors trade off one for one — their counts sum to the array
length — so hunt for the largest survivor set whose XOR is `target` and
subtract its size from the length.

### Hint 2

Fold the entries in one at a time, carrying a map from each reachable XOR
value to the most entries that produce it.

### Hint 3

Every value sits at or below `10^4 < 2^14`, so all reachable XOR values live
in 14 bits. The map stays tiny even though 40 entries generate `2^40`
subsets — that collapse is the whole trick.
