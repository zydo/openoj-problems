# Palindrome Within k Deletions

## Description

A palindrome reads the same forwards and backwards.

You are given a string `s` and an integer `k`. Decide whether at most `k`
letters can be deleted from `s` so that the letters left behind — kept in
their original order — form a palindrome.

Return `true` if they can, `false` otherwise.

### Example 1

```text
Input: s = "stoops", k = 2
Output: true
Explanation: Delete the t and the p; "soos" reads the same both ways.
```

### Example 2

```text
Input: s = "rotor", k = 1
Output: true
Explanation: Nothing needs deleting — "rotor" already reads the same both
ways, and zero is within the budget.
```

### Example 3

```text
Input: s = "tunnel", k = 2
Output: false
Explanation: Only the two n's pair up; deleting at most two letters always
leaves four unmatched ones in the way.
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains lowercase English letters only
- `1 <= k <= s.length`

## Hints

### Hint 1

Deleting letters and keeping the others are the same decision seen from two
sides. What does "the survivors form a palindrome" say about which letters
were kept?

### Hint 2

The survivors are a subsequence that reads the same both ways, and the
deletion budget translates into a length that subsequence must reach or
exceed.

### Hint 3

So everything hinges on one number: the length of the longest palindromic
subsequence of `s`.

### Hint 4

Interval dynamic programming finds it: when a stretch's two end letters
match, they wrap around the best answer for the inside; when they differ,
at least one end is expendable and the better shortened stretch carries
over.
