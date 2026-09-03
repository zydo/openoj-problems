# Subsequences With Short Parity Runs

## Description

You are given an integer array `nums`.

Look at its subsequences — elements picked in the order they appear, with
gaps allowed. A subsequence is acceptable when it never contains three
elements of the same parity (even or odd) in adjacent positions, where
adjacency is measured within the subsequence, not in `nums`. Every
subsequence of one or two elements qualifies automatically.

Count the acceptable non-empty subsequences. Because the total can be
enormous, report it modulo `10^9 + 7`.

### Example 1

```text
Input: nums = [5,2,8,3]
Output: 15
Explanation: All fifteen non-empty subsequences qualify. Even picking the
three even-adjacent candidates like [5,2,8] leaves parities odd, even,
even — no three in a row of one parity.
```

### Example 2

```text
Input: nums = [4,4,4]
Output: 6
Explanation: The three single-element subsequences and the three pairs
qualify. The full subsequence [4,4,4] carries three consecutive even
values and is rejected.
```

### Example 3

```text
Input: nums = [6,6,7,7,7]
Output: 27
Explanation: A length-5 array has 31 non-empty subsequences. Four of them
are rejected because they hold the three 7s back to back: [7,7,7],
[6,7,7,7] twice (either 6 may be kept), and [6,6,7,7,7].
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

Short subsequences can never break the rule; only a third same-parity
element landing after two can disqualify a subsequence.

### Hint 2

While scanning left to right, remember for each parity how many qualifying
subsequences end in a run of exactly one, and how many end in a run of
exactly two, elements of that parity.

### Hint 3

A new element may start a fresh one-element subsequence, extend a
subsequence that ends in the other parity (its run restarts at one), or
extend a run of one of its own parity — but never a run of two.
