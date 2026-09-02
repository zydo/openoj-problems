# Letters In Both Cases II

## Description

You are given a string `word` made up of English letters in either case.
Call a letter dual-case when both its lowercase form and its uppercase form
occur in `word`, and additionally every lowercase occurrence of that letter
sits before its first uppercase occurrence.

Return how many letters of the alphabet are dual-case in `word`.

### Example 1

```text
Input: word = "zZyYxXz"
Output: 2
Explanation: 'y' and 'x' qualify. 'z' does not: its last lowercase
occurrence lands after the 'Z', so the required ordering is broken.
```

### Example 2

```text
Input: word = "RaBbRaR"
Output: 0
Explanation: 'b' fails because its lowercase form appears after the 'B',
'r' fails because lowercase 'r's trail the first 'R', and 'a' never appears
in uppercase.
```

### Example 3

```text
Input: word = "QueueQeE"
Output: 1
Explanation: Only 'e' has every lowercase occurrence ahead of the single
'E'.
```

### Constraints

- `1 <= word.length <= 2 * 10⁵`
- `word` contains only lowercase and uppercase English letters.

## Hints

### Hint 1

For each letter, the ordering condition compares two positions only: its
last lowercase occurrence and its first uppercase occurrence.

### Hint 2

One pass over `word` can record both extremes per letter; afterwards a
letter counts exactly when both exist and the lowercase extreme comes
first.
