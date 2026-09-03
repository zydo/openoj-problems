# Reading Digit Words From A Letter Stream

## Description

You are given a string `s` of length `n` made of lowercase English
letters. Buried inside it are English number words — `zero` through
`nine` — butted directly against other letters with no separators.

Extract the words with one left-to-right sweep of the string:

- If a number word begins exactly at the current position, emit its
  digit and resume scanning just past that word.
- If none does, drop the current character and step forward one
  position.

The output is the string of emitted digits, which is empty when no
number word is ever found. Nothing is left to judgment: no digit word
is a prefix of another, so at most one word can begin at any position —
either a word starts here and is taken whole, or exactly one character
is discarded and the sweep moves on.

### Example 1

```text
Input: s = "sevenineight"
Output: "78"
Explanation: "seven" begins at index 0 and emits 7. The scan resumes at
"ineight", where the orphaned "i" and "n" match no word and are dropped
one by one before "eight" emits 8 — the buried "nine" is never seen
because its first letter was already consumed.
```

### Example 2

```text
Input: s = "fivetenwofour"
Output: "54"
Explanation: "five" emits 5. The letters "t", "e", "n", "w", and "o"
each fail to start a word and are skipped, after which "four" emits 4.
```

### Example 3

```text
Input: s = "zeroninezero"
Output: "090"
Explanation: "zero", "nine", and "zero" are extracted in order and join
into "090" — zeros are ordinary digits here, not placeholders to trim.
```

### Example 4

```text
Input: s = "eightt"
Output: "8"
Explanation: "eight" emits 8 and the leftover "t" is skipped; a word
must be complete to count.
```

### Constraints

- `0 <= n == s.length <= 10⁵`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Follow the sweep literally: at each position, test whether any of the
ten digit words starts there.

### Hint 2

A trie over the ten words answers "does a word start here, and where
does it end?" in one downward walk — though with a fixed vocabulary of
ten short words, three direct slice comparisons per position do the
same job.
