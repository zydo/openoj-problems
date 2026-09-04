# Cryptarithm Feasibility

## Description

An equation is written in letters: a few words are added on the left,
and one word on the right claims to hold their total. The puzzle is
solvable when each letter can be swapped for a digit so that the
addition actually holds. The swap must obey four rules:

- Every occurrence of a letter stands for the same digit.
- Two different letters never stand for the same digit.
- The leading letter of any word — including the result — is not `0`.
- The decoded left-side numbers add up to the decoded right-side number.

Decide whether such a digit assignment exists for the given words and
result.

### Example 1

```text
Input: words = ["AB","CD"], result = "EF"
Output: true
Explanation: One working map is 'A'->1, 'B'->2, 'C'->3, 'D'->5,
'E'->4, 'F'->7, which reads 12 + 35 = 47.
```

### Example 2

```text
Input: words = ["DOG","CAT"], result = "BIRD"
Output: true
Explanation: One working map is 'D'->7, 'O'->3, 'G'->8, 'C'->5,
'A'->0, 'T'->9, 'B'->1, 'I'->2, 'R'->4, which reads 738 + 509 = 1247.
Letter 'A' legally maps to 0 because it never leads a word.
```

### Example 3

```text
Input: words = ["AB","CD"], result = "C"
Output: false
Explanation: Two two-digit numbers always total at least 10, so a
single-digit result can never hold their sum.
```

### Constraints

- `2 <= words.length <= 5`
- `1 <= words[i].length, result.length <= 7`
- Every word and the result use only uppercase English letters.
- At most `10` distinct letters appear across the words and the result.

## Hints

### Hint 1

Assign digits one letter at a time and abandon any partial mapping that
has already made the addition impossible.

### Hint 2

Deciding columns from the units place upward lets the carry do most of
the pruning: once a column's letters are bound, that column's sum either
fixes the result letter's digit or rules the branch out.
