# Largest Shared Repeat Unit

## Description

Call a string `t` a repeat unit of a string `s` when `s` can be built by
gluing copies of `t` together — `t` concatenated with itself some
positive number of times. For instance `AB` is a repeat unit of `ABABAB`,
and `ABAB` is not (three letters cannot split into whole copies of four).

Given two strings `str1` and `str2`, return the longest string that is a
repeat unit of both. When the two strings share no repeat unit at all,
return the empty string.

### Example 1

```text
Input: str1 = "RQRQRQ", str2 = "RQRQ"
Output: "RQ"
Explanation: Both strings are made of whole copies of "RQ" — three and
two of them — and no longer string tiles them both.
```

### Example 2

```text
Input: str1 = "POPP", str2 = "POPPOP"
Output: ""
Explanation: The first string is not a whole number of copies of any
shorter piece, so nothing tiles both strings.
```

### Example 3

```text
Input: str1 = "ZZZZZ", str2 = "ZZ"
Output: "Z"
Explanation: Only "Z" fits both: five copies make the first string, two
make the second.
```

### Constraints

- `1 <= str1.length, str2.length <= 1000`
- `str1` and `str2` consist of English uppercase letters.

## Hints

### Hint 1

Any shared repeat unit has to start both strings at position 0 — it is a
prefix of each.

### Hint 2

There is a slick one-step test: if the two strings are built from a
common unit, then gluing them in either order produces the same text, so
`str1 + str2` and `str2 + str1` must be equal.

### Hint 3

When that test passes, the answer's length is the greatest common
divisor of the two lengths, and the matching prefix of `str1` is the
answer.
