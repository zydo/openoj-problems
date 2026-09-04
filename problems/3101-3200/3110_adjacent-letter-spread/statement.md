# Adjacent Letter Spread

## Description

Every string of length two or more has neighboring pairs of characters.
Call a string's spread the total of the absolute gaps between the
character codes of each neighboring pair.

Given a string `s`, return its spread.

### Example 1

```text
Input: s = "banana"
Output: 53
Explanation: Reading the neighboring pairs of "banana", the code gaps
are |98 - 97| = 1, |97 - 110| = 13, |110 - 97| = 13, |97 - 110| = 13,
and |110 - 97| = 13, so the spread is 1 + 13 + 13 + 13 + 13 = 53.
```

### Example 2

```text
Input: s = "plum"
Output: 21
Explanation: The pair codes are (112, 108), (108, 117), and (117, 109).
Their absolute gaps are 4, 9, and 8, which add up to 21.
```

### Example 3

```text
Input: s = "yq"
Output: 8
Explanation: One pair only: |121 - 113| = 8.
```

### Constraints

- `2 <= s.length <= 100`
- `s` is made up solely of lowercase English letters.

## Hints

### Hint 1

Walk the string once and, for every character after the first, add the
distance between its character code and the previous one's code. The
absolute value is what keeps a descending pair from canceling an
ascending one.
