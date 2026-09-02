# Prime Splits of an Integer

## Description

An integer `n` is given. Call the pair of integers `x` and `y` a prime
split of `n` when all three of these hold:

- `1 <= x <= y <= n`
- `x + y == n`
- both `x` and `y` are prime

Return every prime split as a list of `[xi, yi]` pairs ordered by
ascending `xi`; if no such pair exists, return an empty list.

(An integer is prime when it is greater than 1 and its only divisors
are 1 and itself.)

### Example 1

```text
Input: n = 4
Output: [[2,2]]
Explanation: The only way to write 4 as an ordered prime pair is 2 + 2,
since both halves must be prime and no other combination reaches 4.
```

### Example 2

```text
Input: n = 11
Output: []
Explanation: An odd sum demands a 2 on one side, so the only candidate
is [2,9] — but 9 is composite. No pair exists, and the empty list is
returned.
```

### Example 3

```text
Input: n = 20
Output: [[3,17],[7,13]]
Explanation: Two splits survive the primality check: 3 + 17 and 7 + 13.
(5 + 15 and 11 + 9 both stumble on a composite member.) They are listed
by ascending first element.
```

### Example 4

```text
Input: n = 5
Output: [[2,3]]
Explanation: With an odd target the smaller member is forced to be 2,
and 3 is prime, so the single pair [2,3] is the whole answer.
```

### Constraints

- `1 <= n <= 10⁶`

## Hints

### Hint 1

Settle primality for every integer up to `n` in one sieve pass, and
keep the answers in a structure that lets any single question be
answered immediately afterwards.

### Hint 2

The smaller member of a pair can never exceed `n / 2`. Walking that
range once and testing both `x` and `n - x` against the sieve emits
each pair exactly once — already in the required order.
