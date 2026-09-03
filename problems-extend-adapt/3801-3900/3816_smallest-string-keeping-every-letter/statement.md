# Smallest String Keeping Every Letter

## Description

You are given a string `s` of lowercase English letters.

As long as some letter currently occurs two or more times in `s`, you may
pick such a letter and erase one occurrence of it. Each erase shortens the
string by exactly one character, and you may stop at any moment.

Return the lexicographically smallest string that can be reached by any
sequence of erases.

### Example 1

```text
Input: s = "cbacba"
Output: "acb"
Explanation: Keeping the subsequence a, c, b survives for every distinct
letter. It is reached by erasing the leading c, the first b, and the
trailing a. Nothing smaller keeps all three letters, so "acb" is optimal.
```

### Example 2

```text
Input: s = "zzzayz"
Output: "ayz"
Explanation: A z must survive, but the one at the end can play that role,
so the three leading z's may all be erased. The best string left is
"a y z" read as "ayz".
```

### Example 3

```text
Input: s = "q"
Output: "q"
Explanation: No letter occurs twice, so no erase is ever possible.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters only.

## Hints

### Hint 1

A letter appearing only once can never be chosen, so every distinct letter
must survive; any letter holding a spare occurrence can always give one
up. The reachable strings are exactly the subsequences of `s` that contain
each distinct letter at least once.

### Hint 2

Build the answer one character at a time, always committing the smallest
letter that can still legally come next.

### Hint 3

Taking an occurrence of letter `c` is safe exactly when every letter not
yet placed still has an occurrence to its right. Tracking the two
smallest last occurrences among the unplaced letters makes that test
constant time.

### Hint 4

Store each letter's positions in its own list and advance through each
list with a forward-only pointer; the whole construction then runs in
linear time.
