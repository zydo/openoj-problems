# One Insert To Boost LCT

## Description

You are given a string `s` of uppercase English letters.

You may perform at most one edit: insert a single uppercase English
letter at any position of `s` — before the first character, after the
last, or between any two adjacent characters. Skipping the edit is also
allowed.

A subsequence is formed by deleting zero or more characters without
reordering the rest. Count the subsequences of the final string that
spell exactly `LCT`, and make that count as large as possible.

Return the largest achievable number of `LCT` subsequences.

### Example 1

```text
Input: s = "LLCC"
Output: 4
Explanation: Insert a "T" at the end to get "LLCCT". Its "LCT"
subsequences sit at indices [0,2,4], [0,3,4], [1,2,4], and [1,3,4].
```

### Example 2

```text
Input: s = "CCTL"
Output: 2
Explanation: Insert a "L" at the front to get "LCCTL". Its "LCT"
subsequences sit at indices [0,2,4] and [0,3,4].
```

### Example 3

```text
Input: s = "LCTLCT"
Output: 7
Explanation: The string already holds 4 "LCT" subsequences. Inserting a
"L" at the front to get "LLCTLCT" raises the total to 7.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only uppercase English letters.

## Hints

### Hint 1

Fix a cut between two characters. The only counts that matter around it
are how many single L's and LC pairs lie to the left, and how many
single T's and CT pairs lie to the right.

### Hint 2

One left-to-right sweep can produce all the left-side counts: keep a
running count of L's seen, of LC pairs formed, and of complete LCT
subsequences so far — each T multiplies the LC pairs currently open.

### Hint 3

An inserted L earns every CT pair to its right, an inserted C earns
(left L's) × (right T's), and an inserted T earns every LC pair to its
left. The answer is the string's own LCT count plus the best of those
three gains over all cuts.
