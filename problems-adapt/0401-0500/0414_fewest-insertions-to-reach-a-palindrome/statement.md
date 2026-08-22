# Fewest Insertions to Reach a Palindrome

## Description

You are given a string `s` of lowercase English letters.

In one step you may insert any letter at any position of `s`.

Return the fewest steps needed to arrive at a string that reads the same
forwards and backwards.

### Example 1

```text
Input: s = "rotor"
Output: 0
Explanation: The string already reads identically in both directions.
```

### Example 2

```text
Input: s = "abcdecba"
Output: 1
Explanation: Everything mirrors except the middle "de"; inserting one
letter — say another "d" — yields "abcdedcba".
```

### Example 3

```text
Input: s = "waves"
Output: 4
Explanation: All five letters are distinct, so at most one of them can sit
on the palindrome's axis; the other four each need a partner inserted, as in
"sevawaves".
```

### Constraints

- `1 <= s.length <= 500`
- `s` consists of lowercase English letters.

## Hints

### Hint 1

Look at the two ends of the string. If they hold the same letter they can
mirror each other for free, and the question shrinks to what sits between
them.

### Hint 2

When the ends differ, no arrangement lets both survive unmatched: one step
eventually pairs one of them with a fresh letter. The cost is one plus the
better of dropping either end.

### Hint 3

Equivalently, letters already belonging to a longest palindromic subsequence
pair up for free, and every letter outside it costs exactly one insertion —
so the answer is the string's length minus that subsequence's length.
