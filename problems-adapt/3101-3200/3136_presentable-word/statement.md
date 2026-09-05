# Presentable Word

## Description

You are handed a string called `word` and must decide whether it
qualifies as presentable. A presentable word:

- spans at least three characters;
- uses nothing but the digits `0-9` and English letters in either
  case;
- carries at least one vowel; and
- carries at least one consonant.

The vowels are `a`, `e`, `i`, `o`, `u` together with their uppercase
forms, and every other English letter counts as a consonant. Answer
`true` when `word` is presentable and `false` otherwise.

### Example 1

```text
Input: word = "7thPlace"
Output: true
Explanation: Every character is legal, the word is long enough, and
vowels (`a`, `e`) and consonants (`t`, `h`, `P`, ...) both appear.
```

### Example 2

```text
Input: word = "xYz#"
Output: false
Explanation: The `#` is neither a digit nor an English letter, so the
word is rejected on sight.
```

### Example 3

```text
Input: word = "12345"
Output: false
Explanation: Digits on their own provide neither a vowel nor a
consonant.
```

### Example 4

```text
Input: word = "Owl"
Output: true
Explanation: Three characters, with `O` a vowel and `w`, `l`
consonants — every condition holds.
```

### Constraints

- `1 <= word.length <= 20`
- `word` may contain English letters in both cases, digits, and the
  symbols `@`, `#`, and `$`.

### Hint 1

Sweep the word once: throw out the word the moment a character from
outside the allowed set shows up, and remember along the way whether a
vowel and a consonant have each been seen. The word passes only when
the length gate and both flags end up satisfied.
