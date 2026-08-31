# Count Alternating-Ready Prefixes

## Description

You are given a binary string `s`.

Call a string alternating when no two neighboring characters match. A
prefix of `s` is valid when its characters can be shuffled into some order
that is alternating.

Return how many prefixes of `s` are valid.

### Example 1

```text
Input: s = "01100"
Output: 5
Explanation: Every prefix of "01100" happens to qualify: "0" is alternating
on its own; "01" already alternates too; "011" holds one 0 and two 1s,
close enough to shuffle into "101"; "0110" holds two of each, rearranging
into "0101"; and the full "01100" holds three 0s against two 1s,
rearranging into "01010". All 5 prefixes qualify.
```

### Example 2

```text
Input: s = "010"
Output: 3
Explanation: "0", "01", and "010" are each already alternating as written,
so no shuffling is even needed. All 3 prefixes qualify.
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of '0' and '1'.

## Hints

### Hint 1

A binary string can be rearranged into an alternating one exactly when its
counts of '0' and '1' differ by at most one.

### Hint 2

Walk `s` from left to right, keeping a running count of each character seen
so far in the current prefix, and count the prefixes where that condition
holds.
