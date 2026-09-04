# Distinct Doubled Substrings

## Description

Call a string _doubled_ when it is some string written twice in a row: it
reads as `a + a` for some non-empty string `a`, so its length is even and
its two halves are identical.

Given the string `text`, count the distinct doubled substrings of `text`.
Equal substrings are counted once, no matter how many places they occur.

### Example 1

```text
Input: text = "moonmoonmoonmoon"
Output: 6
Explanation: The doubled substrings are "oo", the four length-8 windows
"moonmoon", "oonmoonm", "onmoonmo" and "nmoonmoo", and the entire string —
four blocks of "moon" are also two blocks of "moonmoon".
```

### Example 2

```text
Input: text = "alfalfa"
Output: 2
Explanation: "alfalf" is "alf" + "alf", and starting one letter later,
"lfalfa" is "lfa" + "lfa".
```

### Example 3

```text
Input: text = "balcony"
Output: 0
Explanation: No substring of "balcony" repeats its first half immediately
after itself.
```

### Constraints

- `1 <= text.length <= 2000`
- `text` consists of lowercase English letters.

## Hints

### Hint 1

Take any substring of even length. What single comparison decides whether
some string was written twice in a row to produce it?

### Hint 2

A doubled substring is pinned down by two numbers: where it starts and how
long each half is. Enumerating every such pair reaches all of them — what
remains to arrange so that equal strings are not counted repeatedly?

### Hint 3

Collect each match in a set keyed by the substring itself, and equal
occurrences collapse into one entry. A direct half comparison is already
quick in practice; hashing each half is the faster route if you need one.
