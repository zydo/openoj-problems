# At Most One Long Press

## Description

Someone meant to type a word, but their finger lingered: at most once
during the typing, a single key was held down slightly too long, so one
letter came out repeated extra times. Everything else went exactly as
planned.

You see the string word that ended up on screen. How many different
strings could the typist have been aiming for? Return that count.

### Example 1

```text
Input: word = "bookkeeper"
Output: 4
Explanation: Besides "bookkeeper" itself (no slip at all), the typist
may have meant "bokekeeper", "bookeper", or "bookkeper" — one doubled
pair shortened by one letter.
```

### Example 2

```text
Input: word = "abcd"
Output: 1
Explanation: Nothing repeats, so a long press cannot have happened and
the only candidate is "abcd".
```

### Example 3

```text
Input: word = "zzzz"
Output: 4
Explanation: The single run of z's could have been intended with one,
two, three, or four of them: "z", "zz", "zzz", "zzzz".
```

### Constraints

- `1 <= word.length <= 100`
- `word is composed of lowercase English letters.`

## Hints

### Hint 1

A long press can only ever pad a block of identical letters, so any
intended string matches word outside one such block.

### Hint 2

Each block of L equal letters contributes L - 1 shorter possibilities,
and because the slip happened at most once these never stack.
