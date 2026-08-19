# Guaranteed Guessing Budget

## Description

An opponent hides an integer somewhere in `1 .. n` and you have to name it.
Naming the hidden integer ends the round for free. Naming anything else costs
you exactly the value you named, and in exchange the opponent tells you whether
the hidden integer sits above or below it; you then name another, and so on.

You control the order in which you probe, never which integer is hidden, so a
strategy is only as good as the most expensive round it can run into. Return the
smallest sum of money that lets you finish the round no matter where the integer
is hidden — the total spent by the cheapest strategy on its own worst hiding
place.

When `n` is `1` the answer is `0`: the sole candidate is named immediately.

### Example 1

```text
Input: n = 9
Output: 14
Explanation: Open with 6. Told "above", follow with 8, which leaves 7 and 9
distinguished for free — that branch spends 6 + 8 = 14. Told "below", follow
with 2 and then 4, spending at most 6 + 2 + 4 = 12. So 14 covers every hiding
place, and no strategy caps its worst branch lower.
```

### Example 2

```text
Input: n = 16
Output: 34
Explanation: The dearest branch of the best strategy is 13, then 9, then 5,
then 7, totalling 34. Widening the range by seven raises the bill by twenty.
```

### Constraints

- `n` is an integer, `1 <= n <= 200`.

## Hints

### Hint 1

Averages play no part here. Assume the opponent is adversarial: whatever you
name, the reply steers you into whichever side is dearer for you.

### Hint 2

After a few replies, the candidates still alive always form a contiguous stretch
of integers. That stretch, and nothing about the path that produced it, decides
what the rest of the round costs.

### Hint 3

Naming `g` inside the stretch `i .. j` therefore costs `g` plus the dearer of
what remains on the two sides, `i .. g-1` and `g+1 .. j`, an empty side costing
nothing. The value of `i .. j` is the smallest such total over every choice of
`g`.

### Hint 4

Each stretch is defined purely by strictly shorter ones, so fill a table over
stretches in order of length instead of recursing — plain recursion re-derives
the same stretch an exponential number of times.
