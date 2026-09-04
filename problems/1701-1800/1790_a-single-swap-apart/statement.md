# A Single Swap Apart

## Description

Two words `s1` and `s2` share the same length. One _letter exchange_ picks
any two positions inside a single word — they may even be the same position
— and trades the letters sitting there.

Decide whether `s1` and `s2` can be made identical by performing at most one
letter exchange on one of the two words.

### Example 1

```text
Input: s1 = "cabbage", s2 = "cabbega"
Output: true
Explanation: Exchanging the letters at positions 4 and 6 of s2 turns
"cabbega" into "cabbage".
```

### Example 2

```text
Input: s1 = "abcde", s2 = "badce"
Output: false
Explanation: The words use the same letters, but they disagree in three
positions, and one exchange repairs at most two.
```

### Example 3

```text
Input: s1 = "noon", s2 = "noon"
Output: true
Explanation: The words already match, so no exchange is needed at all.
```

### Constraints

- `1 <= s1.length == s2.length <= 100`
- Both words contain only lowercase English letters.

## Hints

### Hint 1

Count the positions where the words disagree: anything other than zero or
two rules out a single exchange immediately.

### Hint 2

When there are exactly two, the mismatched pair must hold crossed letters —
each word's letter at one position has to equal the other's at the second.
