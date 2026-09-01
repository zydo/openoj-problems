# Vertical Word Columns

## Description

The string `s` holds words separated by single spaces. Write its words one
under another, left-aligned, and read the result column by column: column
`k` becomes one output string containing the `k`-th character of every
word that has one, with a space filling in for each word too short to
reach that column. Spaces may appear inside a column string but never at
its end — trailing spaces are trimmed. Each word occupies exactly one
column, and each column carries exactly one such string. Return the
columns from left to right.

### Example 1

```text
Input: s = "SUNNY DAY"
Output: ["SD","UA","NY","N","Y"]
Explanation: Stacking SUNNY over DAY and reading downward gives the
columns SD, UA, and NY, then the leftover N and Y from the longer word.
```

### Example 2

```text
Input: s = "BLUE SKY RED"
Output: ["BSR","LKE","UYD","E"]
Explanation: The three words all reach the first three columns; only BLUE
extends to a fourth column, so the last string is just "E".
```

### Example 3

```text
Input: s = "BIG OAK TREE"
Output: ["BOT","IAR","GKE","  E"]
Explanation: Only TREE reaches the fourth column. The two shorter words
contribute blanks there, and those spaces sit before the final E, so they
are kept — only trailing spaces get trimmed.
```

### Constraints

- `1 <= s.length <= 200`
- `s` consists of uppercase English letters and spaces.
- Any two consecutive words are separated by exactly one space.

## Hints

### Hint 1

The number of columns — hence output strings — equals the longest word's
length.

### Hint 2

Assemble each column character by character across the words in order,
emitting a space wherever a word has already run out, and strip blanks
from the right end of the finished column.
