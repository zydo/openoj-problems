# Count Repeat-Digit Numbers

## Description

Call an integer *repeat-digit* when some digit shows up more than once in its
decimal form: `44` and `303` are repeat-digit, while `12` and `907` are not.

Given a positive integer `n`, return how many of the integers `1, 2, ..., n` are
repeat-digit.

### Example 1

```text
Input: n = 33
Output: 3
Explanation: 11, 22 and 33 double a digit. Every other value up to 33 spells
out digits that all differ.
```

### Example 2

```text
Input: n = 120
Output: 21
Explanation: The nine doubles 11, 22, ..., 99, then 100 and 101, then all ten
of 110 through 119. Values such as 102 or 120 do not qualify.
```

### Example 3

```text
Input: n = 2000
Output: 758
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Repeat-digit numbers resist being counted one at a time, but the numbers whose
digits are pairwise different are easy to count in bulk. Count those and
subtract from `n`.

### Hint 2

Handle every length below the length of `n` first. A number of exactly `d`
digits with no repeats has 9 possibilities for its leading digit (zero is
excluded there) and then 9, 8, 7, ... possibilities as the pool of unused
digits shrinks.

### Hint 3

For the numbers as long as `n`, walk `n`'s digits from the left keeping the
prefix fixed. At each position, dropping to any smaller digit not yet used
leaves the trailing positions free to take any arrangement of the remaining
unused digits. Stop as soon as `n`'s own prefix repeats a digit — and if it
never does, `n` itself is one more distinct-digit number.
