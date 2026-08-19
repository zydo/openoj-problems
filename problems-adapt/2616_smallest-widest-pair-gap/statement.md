# Smallest Widest Pair Gap

## Description

You are given an integer array `nums` and an integer `p`.

Choose `p` pairs of positions from `nums` so that no position belongs to more
than one pair. The gap of a pair is the absolute difference between the two
values it joins.

Pick the pairs so that the largest gap among them is as small as possible,
and return that largest gap. The largest gap of an empty collection is 0.

### Example 1

```text
Input: nums = [8,3,1,9,5], p = 2
Output: 2
Explanation: Pair the 1 with the 3 (gap 2) and the 8 with the 9 (gap 1).
The widest gap is 2, and no other pairing keeps both gaps at most 1.
```

### Example 2

```text
Input: nums = [6,2,6,9,2], p = 2
Output: 0
Explanation: The two 2s form one pair and the two 6s another, so both gaps
are 0.
```

### Example 3

```text
Input: nums = [7,4], p = 0
Output: 0
Explanation: No pairs are requested; the largest gap of an empty collection
is 0.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`
- `0 <= p <= nums.length / 2`

## Hints

### Hint 1

Sorting costs nothing in the answer's eyes: whatever pairing you had in mind,
there is one at least as good whose couples are neighbours in sorted order.

### Hint 2

Guess a cap `t`. Whether `p` disjoint pairs with every gap at most `t` exist
is a yes/no question, and the yes-set is an interval starting at some `t`.
What does that suggest?

### Hint 3

Checking one cap takes a single sweep of the sorted values: take a
neighbouring pair whenever it fits under the cap, otherwise step past the
left element. Counting greedily this way never undercounts.
