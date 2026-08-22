# Vowel-Heaviest Window

## Description

You are given a string `s` of lowercase letters and an integer `k`.

Among all stretches of `k` consecutive characters of `s`, find one holding the
most vowels, and return that vowel count.

The vowels are `a`, `e`, `i`, `o`, and `u` — nothing else counts, `y`
included.

### Example 1

```text
Input: s = "queueing", k = 4
Output: 4
Explanation: The stretch "ueue" holds four vowels.
```

### Example 2

```text
Input: s = "rhythms", k = 3
Output: 0
Explanation: No letter of the string is a vowel, so every stretch holds none.
```

### Example 3

```text
Input: s = "toyboat", k = 2
Output: 2
Explanation: The stretch "oa" is two vowels side by side.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` contains only lowercase English letters.
- `1 <= k <= s.length`

## Hints

### Hint 1

Two stretches that start one position apart differ in at most two letters: the
one entering on the right and the one leaving on the left.

### Hint 2

Count the vowels of the first stretch once; from then on, each one-step slide
adjusts that count by at most two — never recount from scratch.

### Hint 3

Track the largest count the running value ever reaches; the first stretch
already seeds it.
