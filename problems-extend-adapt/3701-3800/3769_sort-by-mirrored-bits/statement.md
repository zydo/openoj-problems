# Sort By Mirrored Bits

## Description

An array of positive integers `nums` is given.

The mirror of a number comes from writing it in binary with no leading
zeros, flipping that bit string end to end, and reading the result back
as a number. The flip may leave zeros at the front of the string;
parsing skips them.

Reorder `nums` so the mirrors ascend. When two elements share a mirror,
the smaller original value comes first. Equal elements tie on both
counts and may sit among themselves in any order.

Return the array after this reordering.

### Example 1

```text
Input: nums = [12,7,24,5]
Output: [12,24,5,7]
Explanation: The mirrors are 12 -> "1100" -> 3, 7 -> "111" -> 7,
24 -> "11000" -> 3, and 5 -> "101" -> 5. The pair 12 and 24 shares the
mirror 3, so 12 goes first; the order becomes [12,24,5,7].
```

### Example 2

```text
Input: nums = [9,18,1,33,6]
Output: [1,6,9,18,33]
Explanation: The mirrors are 9 -> "1001" -> 9, 18 -> "10010" -> 9,
1 -> 1, 33 -> "100001" -> 33, and 6 -> "110" -> 3. Ascending mirror
order reads 1, 3, 9, 9, 33, and the shared 9 resolves to 9 before 18,
giving [1,6,9,18,33].
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

One pass computes every mirror, a second pass does the ordering — the
definition is the whole algorithm, nothing is hidden inside it.

### Hint 2

Order on the composite key (mirror, value) rather than trusting a stable
sort, so the smaller-value tie-break holds whichever language runs it.
