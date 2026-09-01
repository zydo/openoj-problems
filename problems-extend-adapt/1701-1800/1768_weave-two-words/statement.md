# Weave Two Words

## Description

Take two words, `word1` and `word2`, and weave them into one string:
attach a letter from `word1`, then a letter from `word2`, then a letter
from `word1` again, alternating like this until one of the words runs
out. Whatever is left of the longer word is then attached to the end,
in its original order.

Return the woven string.

### Example 1

```text
Input: word1 = "key", word2 = "map"
Output: "kmeayp"
Explanation: The letters alternate starting from word1, and both words
end together:
word1:  k   e   y
word2:    m   a   p
woven:  k m e a y p
```

### Example 2

```text
Input: word1 = "hi", word2 = "there"
Output: "htihere"
Explanation: The words run out of step — word2 is longer — so the last
letter of word2 has no partner and its tail "e" lands at the end:
word1:  h   i
word2:    t   h   e   r   e
woven:  h t i h e r   e
```

### Example 3

```text
Input: word1 = "delta", word2 = "go"
Output: "dgeolta"
Explanation: Here word1 is the longer one, so its leftover "lta" is
appended after the alternating part:
word1:  d   e   l   t   a
word2:    g   o
woven:  d g e o l   t   a
```

### Constraints

- Each word is between 1 and 100 characters long.
- Both words contain only lowercase English letters.

## Hints

### Hint 1

Keep one index into each word. While both indices are still valid,
emit the character under `word1`'s index followed by the character
under `word2`'s index, advancing both each round; afterwards, append
whatever remains of either word.
