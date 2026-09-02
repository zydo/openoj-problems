# Next Self-Counting Number

## Description

Call an integer `x` self-counting when every digit `d` that appears in `x`
appears in it exactly `d` times: the digit tallies itself. For instance, in
`333` the digit `3` shows up three times, so `333` is self-counting, while
`123` is not (the `2` appears once and the `3` once).

Given an integer `n`, return the smallest self-counting number that is
strictly greater than `n`.

### Example 1

```text
Input: n = 5
Output: 22
Explanation: A one-digit number `d` contains a single copy of `d`, so only
`1` can qualify among those — and it is not above 5. The first number
above 5 that qualifies is 22: its digit 2 occurs exactly 2 times.
```

### Example 2

```text
Input: n = 250
Output: 333
Explanation: No number between 251 and 332 is self-counting. In 333 the
digit 3 appears 3 times, matching its own value.
```

### Example 3

```text
Input: n = 5000
Output: 14444
Explanation: In 14444 the digit 1 occurs 1 time and the digit 4 occurs 4
times, and no smaller number above 5000 balances itself this way.
```

### Constraints

- `0 <= n <= 10⁶`

## Hints

### Hint 1

A self-counting number can never contain the digit 0, since nothing can
appear zero times while being present.

### Hint 2

Try consecutive integers above `n` — how long can the gap to the next
qualifying number really be under the given bound?
