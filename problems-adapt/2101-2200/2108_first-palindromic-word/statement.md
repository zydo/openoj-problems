# First Palindromic Word

## Description

You hold a list of words. A word counts as palindromic when it spells the
same sequence forward and backward. Walk the list from its first entry to
its last and hand back the earliest palindromic word you meet; if none of
the words qualifies, hand back the empty string `""`.

### Example 1

```text
Input: words = ["noon","moon","deed"]
Output: "noon"
Explanation: "noon" is the first palindromic word in the list. The later
word "deed" is palindromic too, but it comes after "noon".
```

### Example 2

```text
Input: words = ["xyz","level","bob"]
Output: "level"
Explanation: The only palindromic words here are "level" and "bob", and
"level" appears first.
```

### Example 3

```text
Input: words = ["pq","rs"]
Output: ""
Explanation: Neither word reads the same in both directions, so the
result is the empty string.
```

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- Each word consists only of lowercase English letters.

## Hints

### Hint 1

Move through the list in order and stop at the first word that passes a
palindrome check.

### Hint 2

A palindrome check can compare the word against its reverse, or walk two
pointers inward from its ends until they cross.
