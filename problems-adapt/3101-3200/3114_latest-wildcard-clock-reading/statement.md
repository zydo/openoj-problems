# Latest Wildcard Clock Reading

## Description

You get a five-character string `s` showing a 12-hour clock reading in
which zero or more digits have been swapped out for `"?"`.

Readings look like `"HH:MM"` — the hour part `HH` runs from `00` through
`11`, the minute part `MM` from `00` through `59`, so the day opens at
`00:00` and closes at `11:59`.

Fill in every `"?"` with a digit so the finished string is a legal
12-hour reading, choosing the fill that makes the clock show the latest
time it can.

Return the completed string.

### Example 1

```text
Input: s = "??:??"
Output: "11:59"
Explanation: With the whole face wildcard, nothing constrains the
choice except the 12-hour limits, so the latest legal reading — with
hours stopping at 11 — is "11:59".
```

### Example 2

```text
Input: s = "?4:0?"
Output: "04:09"
Explanation: The hours must start with 0 (a leading 1 would make 14,
illegal), the minutes must end in 9, and the pinned digits stay, giving
"04:09".
```

### Example 3

```text
Input: s = "1?:2?"
Output: "11:29"
Explanation: The leading `1` pins the hour to 10 or 11, so 11 wins; the
minute's tens digit is pinned at 2 and its units digit takes the
largest choice, 9 — "11:29".
```

### Constraints

- `s.length == 5`
- `s[2]` is the `":"` character.
- Every other character of `s` is a digit or `"?"`.
- The input guarantees at least one reading between `"00:00"` and
  `"11:59"` can be produced by filling the `"?"` characters.

## Hints

### Hint 1

There are so few legal clock readings that checking all of them is
cheap.

### Hint 2

Generate every time the pattern could stand for and keep the largest
one.
