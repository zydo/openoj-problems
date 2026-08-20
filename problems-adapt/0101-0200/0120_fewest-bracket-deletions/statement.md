# Fewest Bracket Deletions

## Description

You are given a string `s` of lowercase letters and round brackets. Call the
string *balanced* when, reading left to right, every closing bracket has a
still-open bracket to close and no bracket is left open at the end — letters
count for nothing.

Deleting brackets can restore balance. Return every distinct string that is
balanced and is obtained from `s` by the fewest possible deletions. Any order
is accepted, and deletions never touch letters.

### Example 1

```text
Input: s = "(()()"
Output: ["(())","()()"]
Explanation: One deletion is enough. Removing either of the first two
openings gives a balanced string, and nothing else does.
```

### Example 2

```text
Input: s = "(a(b)c)d)"
Output: ["(a(b)c)d","(a(b)cd)","(a(bc)d)"]
Explanation: Two deletions are needed — one opening and one closing. The
letters stay where they are, so the three choices of which brackets to drop
give three different results.
```

### Example 3

```text
Input: s = ")a("
Output: ["a"]
Explanation: Both brackets are hopeless and both must go, taking the string
down to the letter between them.
```

### Constraints

- `1 <= s.length <= 25`
- `s` holds lowercase English letters and the brackets `(` and `)`.
- At most `20` characters of `s` are brackets.

## Hints

### Hint 1

Nothing tells you in advance which brackets to drop, so the honest starting
point is to consider every choice.

### Hint 2

Each bracket faces a binary decision — keep it or delete it — which is a
branching search over subsets of the brackets.

### Hint 3

Most of the search is deeper than you need: what is wanted is the shallowest
deletions that already land on a balanced string.

### Hint 4

Explore by deletion count rather than by subset: visit every one-deletion
string, then every two-deletion string, and stop at the first depth that
contains a balanced one. Nothing below that depth can be an answer, and no
answer at that depth is missed.
