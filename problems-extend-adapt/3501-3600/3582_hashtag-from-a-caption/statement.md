# Hashtag From A Caption

## Description

A video's caption arrives as the string `caption`. Turn it into a tag by
following three steps, in this order:

- Fuse the words of the caption into one camelCase token led by a `#`:
  in camelCase, every word after the first starts with a single capital
  letter, and everything else — including all of the first word — is
  lowercase.
- Delete every character that is not an English letter; only the leading
  `#` is spared.
- Cut the result down to at most 100 characters.

Return the tag that these steps produce from `caption`.

### Example 1

```text
Input: caption = "Morning Run COMPLETED today"
Output: "#morningRunCompletedToday"
Explanation: The first word drops to all lowercase; every later word
keeps just its opening letter capitalized, whatever case it arrived in.
```

### Example 2

```text
Input: caption = "  two  words  "
Output: "#twoWords"
Explanation: The surrounding and repeated spaces separate the words but
never survive into the tag.
```

### Example 3

```text
Input: caption = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
Output: "#zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
Explanation: A single word of 101 letters would overflow the cap, so
its last two letters are cut: the `#` counts toward the 100-character
limit.
```

### Constraints

- `1 <= caption.length <= 150`
- `caption` consists only of English letters and `' '`.

## Hints

### Hint 1

Splitting on whitespace, normalizing each word, and rejoining covers the
first step — but the first word is treated differently from the rest.

### Hint 2

The 100-character cap includes the `#`, so a lone long word keeps only
99 of its letters.
