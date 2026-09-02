# Letters In Both Cases I

## Description

You are given a string `word` made up of English letters in either case.
Call a letter dual-case when both its lowercase form and its uppercase form
occur somewhere in `word`.

Return how many letters of the alphabet are dual-case in `word`.

### Example 1

```text
Input: word = "aAxyzZqQ"
Output: 3
Explanation: The letters 'a', 'z', and 'q' each show up in both cases.
```

### Example 2

```text
Input: word = "MississippiRIVER"
Output: 1
Explanation: Only 'i' appears both as 'i' and as 'I'; the capital letters
'R', 'E', and 'V' have no lowercase partner in the string.
```

### Example 3

```text
Input: word = "HelloWorld"
Output: 0
Explanation: The capitals 'H' and 'W' never appear in lowercase, so no
letter qualifies.
```

### Constraints

- `1 <= word.length <= 50`
- `word` contains only lowercase and uppercase English letters.

## Hints

### Hint 1

With only 52 possible characters, membership is cheap to track: record
which of the 26 letters have been seen in each case.

### Hint 2

The answer is the number of letters whose two case flags both ended up set.
