# The Most Aligned Positions

## Description

Call an array element _aligned_ when its value equals the index of the slot
it occupies — the element whose value is `v` sits in slot `v`.

You start from an integer array `nums` and may remove any number of its
elements, in any order you like. Removing an element closes its slot:
everything after it slides one position to the left, and the surviving
elements are renumbered consecutively starting from `0`.

Choose the removals so that as many of the surviving elements as possible
end up aligned, and return that largest possible count.

### Example 1

```text
Input: nums = [0,0,1]
Output: 2
Explanation: The element 0 at index 0 and the element 1 at index 2 are
already aligned, so two positions match without deleting anything. The
second 0 cannot also become aligned, since both copies would need slot 0.
```

### Example 2

```text
Input: nums = [7,1,0,1,2]
Output: 3
Explanation: Delete the 7 and the first 1. The array becomes [0,1,2], where
every value equals its own index, so all three surviving elements are
aligned.
```

### Example 3

```text
Input: nums = [1,2,0]
Output: 1
Explanation: Deleting the first two elements leaves [0], whose single
element sits in slot 0. Any other choice leaves no element matching its
index, so the answer is 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`

## Hints

### Hint 1

An element can only move leftward, so it can ever become aligned only when
its value is no larger than the index it starts at.

### Hint 2

Two eligible elements can both finish aligned exactly when their values
increase strictly while their slack — current index minus value — never
decreases along the way.

### Hint 3

The answer is the longest such chain, a longest-increasing-subsequence
variant; a Fenwick tree indexed by slack answers it in `O(n log n)`.
