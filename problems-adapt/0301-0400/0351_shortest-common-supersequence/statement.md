# Shortest Common Supersequence

## Description

You are given two lowercase strings `s` and `t`. Produce the shortest string
that has both of them as subsequences.

A string `p` is a subsequence of `q` when `p` can be read off `q` from left
to right after erasing zero or more characters of `q`.

The test data is built so that exactly one shortest such string exists; any
other answer is wrong, not merely a different valid choice.

### Example 1

```text
Input: s = "mango", t = "goman"
Output: "gomango"
Explanation: The two words cross through one shared "man": "goman" reads
g-o-m-a-n inside the answer, "mango" reads m-a-n-g-o, and the leading "go"
of the first word is reused as the trailing "go" of the second.
```

### Example 2

```text
Input: s = "piano", t = "anova"
Output: "pianova"
Explanation: One copy of "ano" serves both words; "pi" goes in front of it
and "va" behind it, for length 5 + 5 - 3.
```

### Example 3

```text
Input: s = "kettle", t = "tlee"
Output: "kettlee"
Explanation: Nothing is shared except "tle": the second word borrows the
"tle" inside "kettle" and only its last "e" has to be appended.
```

### Constraints

- `1 <= s.length, t.length <= 1000`
- `s` and `t` consist of lowercase English letters.

## Hints

### Hint 1

Every character of both strings must appear in the answer, so the only way
to spend less than `|s| + |t|` characters is to let one emitted character
serve one character in each string at once. Which characters can do double
duty?

### Hint 2

Characters serving both strings at once are exactly a common subsequence,
and the savings are largest when it is a longest one. That pins down the
answer's length — but not yet the answer itself.

### Hint 3

Tabulate, for every pair of suffixes, how much doubling-up remains
available; then walk from the front, emitting a shared character once when
the two heads agree, and otherwise emitting the head whose removal keeps
the remaining potential intact.
