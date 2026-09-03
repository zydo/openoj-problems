# Drop the Rarest Letters

## Description

You are handed a string `s` of lowercase English letters and an integer `k`.
You may erase characters from `s` one at a time, and when you are done at
most `k` distinct letters may remain in the string.

Return the smallest number of erasures that makes the string comply. Note
that a letter kind only stops counting against the limit once every copy of
it is gone.

### Example 1

```text
Input: s = "termbucket", k = 3
Output: 5
Explanation:
Eight distinct letters appear; 't' and 'e' occur twice while the other six
occur once each. At most 3 kinds may stay, so keep 't', 'e', and any one of
the singletons and erase every copy of the remaining five kinds. That costs
5 erasures, and no plan can spend fewer because each abandoned kind must be
erased in full.
```

### Example 2

```text
Input: s = "doorbell", k = 2
Output: 4
Explanation:
Six kinds appear: 'o' and 'l' twice each, and 'd', 'r', 'b', 'e' once each.
Keeping the two most frequent kinds, 'o' and 'l', means wiping out the four
singletons, so the answer is 4.
```

### Example 3

```text
Input: s = "mississippi", k = 4
Output: 0
Explanation:
Only four kinds occur — 'i' and 's' four times each, 'p' twice, 'm' once —
which already fits inside the budget of 4, so nothing needs to be erased.
```

### Constraints

- `1 <= s.length <= 16`
- `1 <= k <= 16`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

Tally how often each letter occurs in `s` and keep the nonzero tallies.

### Hint 2

Erasing part of a kind is wasted work — the kind still counts against the
limit — so an optimal plan always erases every copy of the kinds it gives
up on.

### Hint 3

Let `d` be the number of distinct letters. If `d <= k` the string already
fits and the answer is `0`.

### Hint 4

Otherwise `d - k` kinds must be sacrificed. Each sacrifice costs its full
tally independently of the others, so giving up the `d - k` rarest letters
is the cheapest possible choice.
