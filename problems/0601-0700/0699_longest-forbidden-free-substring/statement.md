# Longest Forbidden-Free Substring

## Description

You are given a string `word` and a list of strings `forbidden`.

Call a substring of `word` clean when no string from `forbidden` occurs inside
it. Return the length of the longest clean substring of `word`.

A substring is a contiguous run of characters, possibly empty — so the answer
can be `0` when every character is covered by the list.

### Example 1

```text
Input: word = "zababars", forbidden = ["za","aba"]
Output: 4
Explanation: "za" occupies the first two characters and "aba" occurs at
positions 1-3 and 3-5, so no clean stretch can reach past position 3. The tail
"abrs" (positions 4-7) avoids every forbidden string and has length 4.
```

### Example 2

```text
Input: word = "abacabad", forbidden = ["cab"]
Output: 5
Explanation: The one occurrence of "cab" sits at positions 3-5. The stretch
"abaca" (positions 0-4) stops just before it and stays clean, and any longer
stretch would have to cross the occurrence.
```

### Example 3

```text
Input: word = "xyz", forbidden = ["x","y","z"]
Output: 0
Explanation: Every single character is forbidden, so even one-character
stretches are not clean. Only the empty substring qualifies.
```

### Constraints

- `1 <= word.length <= 10⁵`
- `word` consists of lowercase English letters
- `1 <= forbidden.length <= 10⁵`
- `1 <= forbidden[i].length <= 10`
- every `forbidden[i]` consists of lowercase English letters

## Hints

### Hint 1

Whether a stretch is clean depends only on which forbidden strings occur
inside it, and cutting a clean stretch in two leaves both halves clean — so
look for the widest stretch that contains no occurrence at all.

### Hint 2

No forbidden string is longer than 10 characters, so when a stretch grows to
the right only its last few characters can newly complete an occurrence.

### Hint 3

Slide the left end along: the moment a forbidden string ends at the current
right end, the left end must jump past that string's first character.
