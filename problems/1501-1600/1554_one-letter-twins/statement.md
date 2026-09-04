# One-Letter Twins

## Description

You receive a list of strings `words` in which every string has the same
length.

Decide whether two entries of `words` are "one-letter twins": they match at
every position except **exactly one**, where their letters disagree.
Return `true` if such a pair exists and `false` if none does.

### Example 1

```text
Input: words = ["cat","cot","dog"]
Output: true
Explanation: "cat" and "cot" agree at the first and last letters and
disagree only in the middle ('a' vs 'o').
```

### Example 2

```text
Input: words = ["red","tan","bit"]
Output: false
```

### Example 3

```text
Input: words = ["lane","line","lime"]
Output: true
Explanation: "lane" and "line" differ at index 2 ('a' vs 'i'); "line" and
"lime" do too, at index 3.
```

### Constraints

- The combined length of all strings in `words` is at most `10⁵`.
- Every string in `words` has the same length.
- Every string in `words` is distinct.
- Every string in `words` contains only lowercase English letters.

## Hints

### Hint 1

Comparing all pairs letter by letter is `O(n² · m)` for `n` words of
length `m` — is there a way to avoid touching every pair?

### Hint 2

Pick one position, erase that letter from every word, and throw the
results into a set. Two words that survive as duplicates agree everywhere
except that one spot.
