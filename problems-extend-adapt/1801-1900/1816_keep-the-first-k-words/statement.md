# Keep the First K Words

## Description

A sentence is a sequence of words separated by single spaces, with no
extra spaces at either end, and every word is made only of uppercase and
lowercase English letters. For instance, `"Morning runs build habits"` and
`"HELLO"` are both sentences.

You are given such a sentence `s` and an integer `k`. Keep only the first
`k` words of `s` — in their original order, still joined by single
spaces — and return the resulting sentence.

### Example 1

```text
Input: s = "the quick brown fox jumps over", k = 3
Output: "the quick brown"
Explanation: The words are ["the", "quick", "brown", "fox", "jumps",
"over"], and the first 3 of them rejoin to "the quick brown".
```

### Example 2

```text
Input: s = "morning runs build strong habits", k = 4
Output: "morning runs build strong"
```

### Example 3

```text
Input: s = "stay curious", k = 2
Output: "stay curious"
Explanation: The sentence holds exactly 2 words, so nothing is dropped.
```

### Constraints

- `1 <= s.length <= 500`
- `k` is in the range `[1, the number of words in s]`.
- `s` consists of only lowercase and uppercase English letters and
  spaces.
- The words in `s` are separated by a single space.
- There are no leading or trailing spaces.

## Hints

### Hint 1

Splitting the sentence into its words turns the task into taking a plain
prefix of a list.

### Hint 2

Alternatively, scan for the `k`-th space and keep everything to its left.
