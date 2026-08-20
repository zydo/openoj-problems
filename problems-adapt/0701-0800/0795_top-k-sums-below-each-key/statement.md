# Top-k Sums Below Each Key

## Description

You are given two integer arrays `nums1` and `nums2`, both of length `n`,
and a positive integer `k`. Think of each index `j` as a card carrying a key
`nums1[j]` and a value `nums2[j]`.

For each index `i`, gather every card whose key is strictly smaller than
`nums1[i]`, and add up the `k` largest values among them — or all of them,
if fewer than `k` cards qualify.

Return an array `answer` of length `n` with one such total per index.

### Example 1

```text
Input: nums1 = [4,1,3,5,2], nums2 = [30,10,5,45,15], k = 2
Output: [25,0,25,45,10]
Explanation:
For i = 0 (key 4): keys 1, 3 and 2 qualify, with values 10, 5, 15 — the two
largest are 15 + 10 = 25.
For i = 1 (key 1): no smaller key exists, so 0.
For i = 2 (key 3): keys 1 and 2 qualify, values 10 and 15, summing to 25.
For i = 3 (key 5): every other card qualifies, with values 30, 10, 5 and
15; the two largest are 30 + 15 = 45.
For i = 4 (key 2): only key 1 qualifies, contributing 10.
```

### Example 2

```text
Input: nums1 = [7,7,7], nums2 = [4,9,2], k = 2
Output: [0,0,0]
Explanation: Every card shares the key 7, and no key is strictly smaller
than itself, so nothing ever qualifies.
```

### Example 3

```text
Input: nums1 = [2,3,2,4], nums2 = [6,3,9,1], k = 3
Output: [0,15,0,18]
Explanation: The two key-2 cards see nothing below them. The key-3 card
sees both, 6 + 9 = 15 — fewer than k cards, so all of them count. The
key-4 card sees all three others, 6 + 3 + 9 = 18.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 10⁵`
- `1 <= nums1[i], nums2[i] <= 10⁶`
- `1 <= k <= n`

## Hints

### Hint 1

Each query pools exactly the cards with smaller keys, so walking the cards
in increasing key order lets every query inherit a pool built by its
predecessors.

### Hint 2

A min-heap capped at `k` entries, plus its running sum, answers "sum of the
k largest so far" in constant time: newcomers either fill the heap, evict
the minimum, or lose.

### Hint 3

Cards sharing a key cannot see one another — read the answers for a whole
equal-key block before letting the block's values into the pool.
