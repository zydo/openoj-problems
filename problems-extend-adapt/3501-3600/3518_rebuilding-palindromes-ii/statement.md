# Rebuilding Palindromes II

## Description

A palindromic string `s` of lowercase English letters and an integer `k`
are given.

As in part I, the letters may be shuffled in any way that keeps the string
reading the same in both directions — but this time you must go deeper
down the list: among all distinct palindromic shufflings, ordered
lexicographically from smallest to largest, return the `k`-th one. Two
shufflings that produce the same string count once.

If `s` admits fewer than `k` distinct palindromic shufflings, return an
empty string.

### Example 1

```text
Input: s = "xyzzyx", k = 2
Output: "xzyyzx"
Explanation: The six distinct palindromic shufflings, in order, begin
"xyzzyx", "xzyyzx", "yxzzxy", … The second one is "xzyyzx".
```

### Example 2

```text
Input: s = "tattarrattat", k = 4
Output: "aatttrrtttaa"
Explanation: Sixty distinct palindromic shufflings exist; the fourth in
lexicographic order is "aatttrrtttaa".
```

### Example 3

```text
Input: s = "bob", k = 5
Output: ""
Explanation: Only one palindromic shuffling exists, "bob", so `k = 5`
requests past the end and the answer is empty.
```

### Constraints

- `1 <= s.length <= 10⁴`
- `s` consists of lowercase English letters.
- `s` is guaranteed to be palindromic.
- `1 <= k <= 10⁶`

## Hints

### Hint 1

A palindromic shuffling is decided entirely by its first half: the rest is
the mirror image, plus at most one unpaired middle letter. So the task is
really about ranking arrangements of the half's letters.

### Hint 2

The half's multiset is forced — exactly `count[c] / 2` copies of each
letter — so count how many arrangements of the remaining multiset start
with each candidate letter, smallest letter first.

### Hint 3

If the block of arrangements starting with a candidate letter still
contains rank `k`, that letter is the next one; otherwise subtract the
block's size from `k` and move to the next letter.

### Hint 4

The number of arrangements of a multiset is a multinomial. Full values are
astronomically large, but only comparisons against `k` matter — cap every
running product at `k` and it stays exact in ordinary 64-bit arithmetic.
