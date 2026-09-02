# A Rising Run Out Of Two Rows

## Description

You are given two 0-indexed integer arrays, `nums1` and `nums2`, both
holding `n` values. Assemble a combined array `combo` of the same
length: for each index `i`, slot `combo[i]` receives either
`nums1[i]` or `nums2[i]` — your call, made independently per slot.

Call a stretch of consecutive slots a _rising run_ when every value in
it is at least the one before it; ties are allowed. Fill `combo` so
that its longest rising run is as long as possible, and return that
length.

Note: a subarray is a contiguous, non-empty sequence of elements
within an array.

### Example 1

```text
Input: nums1 = [2,5,3,8], nums2 = [9,6,7,4]
Output: 4
Explanation: Take combo = [nums1[0], nums1[1], nums2[2], nums1[3]] =
[2,5,7,8]. Every slot keeps pace with the one before (2 ≤ 5 ≤ 7 ≤ 8),
so the whole array is a single rising run of length 4 — the most any
combo of four slots can offer.
```

### Example 2

```text
Input: nums1 = [6,1,2], nums2 = [4,5,3]
Output: 2
Explanation: A length-2 run is easy, e.g. combo = [nums2[0],
nums2[1]] = [4,5]. Covering all three slots at once is impossible:
the final slot holds 2 or 3, so the middle slot would have to supply
1 (since 5 overshoots both), and neither 6 nor 4 at index 0 can
precede that 1.
```

### Example 3

```text
Input: nums1 = [2,2,1], nums2 = [3,1,3]
Output: 3
Explanation: Take combo = [nums1[0], nums1[1], nums2[2]] = [2,2,3].
The tie in the middle still rises (ties are allowed), so all 3 slots
form one run.
```

### Constraints

- `1 <= nums1.length == nums2.length == n <= 10⁵`
- `1 <= nums1[i], nums2[i] <= 10⁹`

### Hint 1

Work left to right. Once a rising run is under way, its future depends
only on the value it just placed — nothing earlier in the run matters.

### Hint 2

Keep two numbers per index: the longest rising run ending exactly here
if this slot takes `nums1[i]`, and the same if it takes `nums2[i]`.
A pick of `v` extends whichever previous-slot pick it still dominates,
so each of the two numbers is 1 plus the best predecessor run whose
value is `<= v` — or just 1 when neither qualifies.

### Hint 3

Each transition compares the current pick against **both** previous
picks, so a run may hop between the rows mid-way. The answer is the
largest run length seen at any index, not just the final pair.
