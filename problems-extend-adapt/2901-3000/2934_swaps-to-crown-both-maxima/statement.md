# Swaps To Crown Both Maxima

## Description

You have two integer arrays, `nums1` and `nums2`, of equal length `n`,
read left to right as columns: column `i` is the pair
`(nums1[i], nums2[i])`.

One operation picks any column and exchanges its two values, so
`nums1[i]` and `nums2[i]` trade places.

Your job is to perform as few operations as possible so that both arrays
end crowned — the last slot of each holds that array's own largest
value:

- `nums1[n - 1]` equals `max(nums1[0], ..., nums1[n - 1])`, and
- `nums2[n - 1]` equals `max(nums2[0], ..., nums2[n - 1])`.

Return this smallest number of operations, or `-1` if no sequence of
operations can get both arrays there.

### Example 1

```text
Input: nums1 = [8,2,6], nums2 = [3,7,9]
Output: 1
Explanation: Swap column 0, so nums1 becomes [3,2,6] and nums2 becomes
[8,7,9]. Now 6 is the largest value of nums1 and 9 the largest of
nums2, both sitting in the final slot. One swap is enough.
```

### Example 2

```text
Input: nums1 = [4,7,9], nums2 = [3,1,5]
Output: 0
Explanation: nums1 already ends with its maximum 9 and nums2 with its
maximum 5, so no operation is needed.
```

### Example 3

```text
Input: nums1 = [1,1,6], nums2 = [4,5,2]
Output: 1
Explanation: Leaving the last column alone fails, because 2 is not the
largest value of nums2. Swapping the last column instead moves the 6
into nums2 and the 2 into nums1, giving nums1 = [1,1,2] and
nums2 = [4,5,6] — with every other column untouched, both arrays are
crowned after that single operation.
```

### Example 4

```text
Input: nums1 = [10,3,5], nums2 = [2,4,6]
Output: -1
Explanation: The value 10 in column 0 must live under one of the two
final targets, 5 or 6, and it exceeds both. No arrangement works, so
the answer is -1.
```

### Constraints

- `1 <= n == nums1.length == nums2.length <= 1000`
- `1 <= nums1[i] <= 10^9`
- `1 <= nums2[i] <= 10^9`

## Hints

### Hint 1

Fix what the final targets are. Either the last column stays as it is,
or one operation swaps it — and that swap trades the two targets for
one another. Handle the two possibilities separately.

### Hint 2

With the targets fixed, each earlier column can be judged on its own. A
column either already fits under its own target pair, or it fits only
crosswise and must pay one swap, or it fits nowhere and the whole plan
collapses.

### Hint 3

Compare the two plans: the cost of keeping the last column, versus one
plus the cost of swapping it. Take whichever plan is cheaper.

### Hint 4

If both plans collapse, the answer is `-1`.
