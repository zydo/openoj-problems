# Letter Supply for Balloon

## Description

You are given a string `text` of lowercase English letters. Treat it as a
pool of single characters: how many complete copies of the word "balloon"
can you spell out of that pool, using each character of `text` in at most
one copy?

Return the number of copies.

### Example 1

![diagram](figures/1189-1.svg)

```text
Input: text = "nlaebolko"
Output: 1
```

### Example 2

![diagram](figures/1189-2.svg)

```text
Input: text = "loonbalxballpoon"
Output: 2
```

### Example 3

```text
Input: text = "balloonballoonball"
Output: 2
```

(There is no fourth `n`, so the third half-finished copy does not count.)

### Constraints

- `1 <= text.length <= 10⁴`
- Every character of `text` is a lowercase English letter.

## Hints

### Hint 1

Tally how many times each letter occurs in `text`.

### Hint 2

One copy of the word consumes `b`, `a`, and `n` once each, but `l` and
`o` twice each — divide each letter's tally by its per-copy demand.

### Hint 3

Every copy drains all five letters together, so the letter with the
smallest quotient decides the answer.
