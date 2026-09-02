# Erase on Every Star

## Description

The string `s` is written in lowercase letters sprinkled with `*`
characters. Reading it left to right, each `*` acts as a delete key: it
erases the nearest letter standing somewhere to its left, and then
vanishes itself.

Carry out this deletion for every star and give back the string that
remains.

Two guarantees hold for the input you are given:

- The operation is always performable — every star has a letter to its
  left when its turn comes.
- No matter in what order the stars are applied, the surviving string is
  the same.

### Example 1

```text
Input: s = "ab*c*d"
Output: "ad"
Explanation: The first star deletes the b next to it, the second star
deletes the c. Only the a and the trailing d survive.
```

### Example 2

```text
Input: s = "xy**z"
Output: "z"
Explanation: The two stars erase y and then x in turn, leaving just the
final z.
```

### Example 3

```text
Input: s = "done****"
Output: ""
Explanation: Four stars each claim one of the four letters, so nothing
at all is left.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` holds only lowercase English letters and `*` characters.
- Deleting is always possible as described above.

## Hints

### Hint 1

Which familiar structure lets you remove "the most recent thing still
standing" in constant time?

### Hint 2

Scan the string once with a stack of survivors: a letter gets pushed, a
star pops the letter on top. What is left when the scan finishes is the
answer.
