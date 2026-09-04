# Widest Gap Between Matching Characters

## Description

Pick any letter that occurs at least twice in `s` and take two of its
occurrences. The span between them — everything lying strictly between the
two positions, with the bounding letters themselves excluded — is a
candidate. Return the widest candidate over all such pairs, or `-1` if no
letter ever repeats.

Two equal letters sitting right next to each other leave an empty span, so
they contribute `0`.

### Example 1

```text
Input: s = "aabb"
Output: 0
Explanation: Both letters here come in adjacent pairs, and adjacent
occurrences have nothing between them, so the widest span is empty.
```

### Example 2

```text
Input: s = "banana"
Output: 3
Explanation: The first and last 'a' surround the substring "nan", whose
length 3 beats every other matching pair.
```

### Example 3

```text
Input: s = "qwxr"
Output: -1
Explanation: Every letter is distinct, so there is no matching pair to
measure.
```

### Constraints

- `1 <= s.length <= 300`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

For a fixed letter, the widest span it can offer always uses its earliest
and latest positions — inner pairs of that same letter never do better.

### Hint 2

Sweep `s` once while remembering where each letter first appeared; every
time you meet a letter again, the distance to that first sighting gives a
candidate answer.
