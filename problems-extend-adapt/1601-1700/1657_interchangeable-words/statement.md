# Interchangeable Words

## Description

Call two words **interchangeable** when either one can be turned into
the other by repeatedly applying these two moves:

- Move 1: exchange the positions of any two characters that are present.
  For instance, `abcde -> aecdb`.
- Move 2: pick two characters that both occur in the word and trade all
  of their copies — every copy of the first becomes the second and every
  copy of the second becomes the first. For instance,
  `aacabb -> bbcbaa`.

Both moves may be applied any number of times, in any order, to either
word.

Given `word1` and `word2`, report whether the two words are
interchangeable.

### Example 1

```text
Input: word1 = "listen", word2 = "silent"
Output: true
Explanation: The words use the same letters with the same counts, so
reordering alone (Move 1) turns one into the other.
```

### Example 2

```text
Input: word1 = "trick", word2 = "bricks"
Output: false
Explanation: The words differ in length and in the set of letters they
contain, and neither move can change either property.
```

### Example 3

```text
Input: word1 = "aabbccdd", word2 = "ddccbbaa"
Output: true
Explanation: A couple of position swaps (Move 1) reverses the word.
```

### Example 4

```text
Input: word1 = "bookkeeper", word2 = "ropeokeebrk"
Output: false
Explanation: Both words draw on the same six letters, but their
frequency profiles differ — the counts sort to 1,1,1,2,2,3 in one word
and 1,1,2,2,2,3 in the other — so no sequence of moves aligns them.
```

### Constraints

- `1 <= word1.length, word2.length <= 10^5`
- `word1` and `word2` consist of lowercase English letters only.

## Hints

### Hint 1

Move 1 means character order is completely free — only the letter
inventory matters.

### Hint 2

Move 2 means the actual counts are free too, as long as the multiset of
counts can be matched up; what neither move can change is *which*
letters appear at all.

### Hint 3

So tally both words into 26-slot count tables, check the two tables use
exactly the same nonzero slots, and check the sorted count lists agree.
