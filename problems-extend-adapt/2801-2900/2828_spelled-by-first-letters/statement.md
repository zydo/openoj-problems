# Spelled By First Letters

## Description

You are given an array of strings `words` and a string `s`. Read down the
left edge of `words`: take the first character of each string, in order,
and write them one after another. When that reading is exactly `s`, we say
`s` spells `words`. For example, "ab" spells ["apple", "banana"], but it
does not spell ["bear", "aardvark"].

Return true if `s` spells `words`, and false otherwise.

### Example 1

```text
Input: words = ["olive","pine","year"], s = "opy"
Output: true
Explanation: The opening letters of the words are 'o', 'p', and 'y', and
reading them in order gives "opy" — exactly s.
```

### Example 2

```text
Input: words = ["sun","moon","star"], s = "sm"
Output: false
Explanation: The opening letters spell "sms", which is one character
longer than s, so s cannot be the reading.
```

### Example 3

```text
Input: words = ["go","out"], s = "gg"
Output: false
Explanation: The opening letters spell "go". The length agrees with s, but
the second character differs, so the reading is not s.
```

### Example 4

```text
Input: words = ["calm","owls","drift","east"], s = "code"
Output: true
Explanation: Taking 'c', 'o', 'd', and 'e' from the four words in order
reproduces s exactly.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `1 <= s.length <= 100`
- `words[i]` and `s` consist of lowercase English letters.

## Hints

### Hint 1

Assemble the reading one leading character at a time, then hold it up
against `s`.

### Hint 2

A mismatch can show up early: if the lengths disagree nothing else
matters, and otherwise the first differing character decides.
