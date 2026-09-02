# Tallying Subsequences With Odd Sums

## Description

You are handed an array of positive integers `nums`.

A subsequence of `nums` is any selection of its entries that keeps their
original order — each position is either kept or struck out, and repeated
values in the array still count as separate entries.

Count the subsequences whose elements add up to an odd number. That count
grows quickly, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [2,3,4]
Output: 4
Explanation: The lone odd entry 3 has to be picked, since adding an even
entry never disturbs a sum's parity. Each of the even entries 2 and 4 is
then independently in or out, which gives 2 * 2 = 4 subsequences.
```

### Example 2

```text
Input: nums = [5,5,5,5]
Output: 8
Explanation: Every entry is odd, so a subsequence sums odd exactly when it
holds an odd number of entries: the four singletons plus the four triples,
8 in all.
```

### Example 3

```text
Input: nums = [6,7]
Output: 2
Explanation: Only the odd entry can swing a sum: pick the 7 by itself, or
together with the 6.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Parity is the only thing that matters: an even entry leaves a running
sum's parity untouched, an odd entry always flips it.

### Hint 2

Sweep once with two counters — how many partial subsequences sum even and
how many sum odd. An even entry doubles both; an odd entry doubles both
and then swaps them, because appending it turns every even pick odd and
every odd pick even.

### Hint 3

Equivalently: with no odd entry the answer is `0`, and otherwise exactly
half of all `2^n` subsequences qualify, i.e. `2^(n-1)` modulo `10⁹ + 7`.
