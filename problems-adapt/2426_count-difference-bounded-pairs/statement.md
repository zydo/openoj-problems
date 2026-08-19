# Count Difference-Bounded Pairs

## Description

You are given two integer arrays `nums1` and `nums2`, both of length `n`, and
an integer `diff`.

Count the index pairs `(i, j)` meeting both requirements:

- `0 <= i < j <= n - 1`, and
- `nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff`.

Return the count.

### Example 1

```text
Input: nums1 = [6,2,9,4], nums2 = [3,3,5,3], diff = 2
Output: 4
Explanation:
The per-index differences nums1[k] - nums2[k] are [3,-1,4,1], in which form
the requirement reads values[i] <= values[j] + 2. Four pairs pass:
1. (0, 2): 3 <= 4 + 2
2. (0, 3): 3 <= 1 + 2
3. (1, 2): -1 <= 4 + 2
4. (1, 3): -1 <= 1 + 2
The remaining two pairs fail: (0, 1) needs 3 <= -1 + 2, and (2, 3) needs
4 <= 1 + 2.
```

### Example 2

```text
Input: nums1 = [1,5], nums2 = [4,0], diff = -9
Output: 0
Explanation:
The only pair needs 1 - 5 <= 4 - 0 - 9, that is -4 <= -5, which is false.
```

### Example 3

```text
Input: nums1 = [4,4,4], nums2 = [2,2,2], diff = 0
Output: 3
Explanation:
Every per-index difference equals 2, so each of the three pairs needs
2 <= 2 + 0, which holds.
```

### Constraints

- `n == nums1.length == nums2.length`
- `2 <= n <= 10⁵`
- `-10⁴ <= nums1[i], nums2[i] <= 10⁴`
- `-10⁴ <= diff <= 10⁴`

## Hints

### Hint 1

Gather every term mentioning `i` on one side of the comparison and every term
mentioning `j` on the other. The two arrays collapse into a single per-index
quantity.

### Hint 2

With that quantity, the question per position `j` becomes: how many earlier
positions carry a value at most `values[j] + diff`? That is a running count
over a bounded range of values.

### Hint 3

Which logarithmic-time structure keeps a multiset of streamed values and
answers "how many are at most x" as often as you like?
