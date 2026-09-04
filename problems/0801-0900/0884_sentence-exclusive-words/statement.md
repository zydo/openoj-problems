# Sentence-Exclusive Words

## Description

Each input is a lowercase sentence whose words are separated by exactly one
space. Return every word that occurs once in one sentence and does not occur
in the other.

The output order is defined: first place qualifying words from `s1` in their
appearance order, then qualifying words from `s2` in their appearance order.
No qualifying word can appear twice in the returned list.

### Example 1

```text
Input: s1 = "red blue red green", s2 = "blue yellow"
Output: ["green","yellow"]
```

### Example 2

```text
Input: s1 = "one two", s2 = "three four"
Output: ["one","two","three","four"]
```

### Example 3

```text
Input: s1 = "echo echo", s2 = "echo tone"
Output: ["tone"]
```

### Constraints

- `1 <= s1.length, s2.length <= 200`
- `s1` and `s2` contain only lowercase English letters and spaces.
- Neither sentence begins or ends with a space.
- Adjacent words are separated by one space.
