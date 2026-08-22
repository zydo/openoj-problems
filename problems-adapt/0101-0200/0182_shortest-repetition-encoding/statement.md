# Shortest Repetition Encoding

## Description

Represent repeated text with the form `count[pattern]`, meaning `pattern`
repeated exactly `count` times. The pattern may itself contain encoded pieces.

Given a lowercase string `s`, return a valid representation having minimum
length. Leave any portion literal when encoding it would not make it shorter.
If several shortest representations exist, any one is accepted.

### Example 1

```text
Input: s = "bbbb"
Output: "bbbb"
Explanation: "4[b]" has the same length, so the literal form is retained.
```

### Example 2

```text
Input: s = "xyzxyzxyz"
Output: "3[xyz]"
```

### Example 3

```text
Input: s = "abababababab"
Output: "6[ab]"
```

### Constraints

- `1 <= s.length <= 150`
- Every character of `s` is a lowercase English letter.

## Hints

### Hint 1

For each substring, compare its literal text, every split into two encoded
substrings, and every whole-substring repetition.

### Hint 2

Fill interval answers from shorter substrings to longer ones.

### Hint 3

When an interval repeats a shorter period, place that period's best encoding
inside the brackets.
