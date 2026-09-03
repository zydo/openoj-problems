# Cheapest Way to Join Sorted Runs

## Description

You are given a 2D integer array `lists`. Every `lists[i]` is non-empty and
already sorted in non-decreasing order.

You combine the lists two at a time. Picking any two entries `a` and `b`
costs `len(a) + len(b) + abs(median(a) - median(b))` — both lengths plus the
distance between their medians. The two entries are replaced by their merged
sorted result, and combining continues until a single list is left.

Return the smallest possible total cost over all ways to schedule the
combines.

The median of a list is its middle element once the list is sorted in
non-decreasing order; when the length is even, the left of the two middle
elements is the median.

### Example 1

```text
Input: lists = [[2,9],[5,7,11],[1,4]]
Output: 17
Explanation: Combine a = [2, 9] and b = [1, 4]: both have length 2 and
medians 2 and 1, so the price is 2 + 2 + abs(2 - 1) = 5, and the result
[1, 2, 4, 9] replaces them. Combine a = [5, 7, 11] and b = [1, 2, 4, 9]:
lengths 3 and 4, medians 7 and 2, so the price is 3 + 4 + abs(7 - 2) = 12.
The total is 5 + 12 = 17.
```

### Example 2

```text
Input: lists = [[3,3,8],[-2,6]]
Output: 10
Explanation: Only one combine is needed: lengths 3 and 2, medians 3 and -2,
so the price is 3 + 2 + abs(3 - (-2)) = 10.
```

### Example 3

```text
Input: lists = [[4],[9]]
Output: 7
Explanation: Combine the two singletons: 1 + 1 + abs(4 - 9) = 7.
```

### Example 4

```text
Input: lists = [[6],[6]]
Output: 2
Explanation: The medians agree, so only the lengths are paid: 1 + 1 + 0 = 2.
```

### Constraints

- `2 <= lists.length <= 12`
- `1 <= lists[i].length <= 500`
- `-10⁹ <= lists[i][j] <= 10⁹`
- Each `lists[i]` is sorted in non-decreasing order.
- The total number of elements across all lists is at most `2000`.

## Hints

### Hint 1

A merge schedule is a binary tree over the input lists, and the price of
each internal node depends only on which original lists feed its two
subtrees.

### Hint 2

That structure invites dynamic programming over bitmasks: at most 12 lists
means at most 4096 subsets.

### Hint 3

For every subset, precompute its total length and the median of its merged
multiset — the median can be located by binary searching the pooled values
instead of materializing the merged list.

### Hint 4

Let dp[mask] be the cheapest total for folding every list in mask into one;
try each split of mask into two nonempty halves and keep the best
dp[s] + dp[mask ^ s] + price(s, mask ^ s).

### Hint 5

Charging one split per unordered pair keeps the sweep at the classic O(3^n)
subset-DP cost.
