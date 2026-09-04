# Leftmost Window With a Given Hash

## Description

Fix this hashing scheme for strings. For a string `w` of length `k` and
integers `p` and `m`:

`hash(w, p, m) = (val(w[0]) * p^0 + val(w[1]) * p^1 + … + val(w[k-1]) * p^(k-1)) mod m`

where `val(c)` is a letter's seat in the alphabet, counting `val('a') = 1`
up to `val('z') = 26`.

You are given a string `s` and four integers `power`, `modulo`, `k`, and
`hashValue`. Among the substrings of `s` having length exactly `k` (a
substring being a contiguous run of characters), return the earliest one
whose hash under `p = power` and `m = modulo` comes out as `hashValue`.

The data is generated so that at least one qualifying substring exists.

### Example 1

```text
Input: s = "coffee", power = 3, modulo = 20, k = 2, hashValue = 4
Output: "ff"
Explanation: hash("ff", 3, 20) = (6 * 1 + 6 * 3) mod 20 = 24 mod 20 = 4, and
the earlier windows "co", "of" hash to 8 and 13, so "ff" is the first
window that lands on 4.
```

### Example 2

```text
Input: s = "banana", power = 7, modulo = 50, k = 3, hashValue = 48
Output: "ana"
Explanation: hash("ana", 7, 50) = (1 * 1 + 14 * 7 + 1 * 49) mod 50 = 148
mod 50 = 48. The window "ana" appears again starting at index 3 with the
same hash, but the one at index 1 comes first, so it wins.
```

### Example 3

```text
Input: s = "data", power = 5, modulo = 1000, k = 4, hashValue = 634
Output: "data"
Explanation: The only window of length 4 is the whole string:
(4 * 1 + 1 * 5 + 20 * 25 + 1 * 125) mod 1000 = 634.
```

### Constraints

- `1 <= k <= s.length <= 2 * 10^4`
- `1 <= power, modulo <= 10^9`
- `0 <= hashValue < modulo`
- `s` consists of lowercase English letters only
- the data guarantees a qualifying substring exists

## Hints

### Hint 1

Two adjacent windows share `k - 1` characters. What does their hash have in
common, and what would it cost to derive one from the other instead of
summing from scratch?

### Hint 2

In this hash the exponents climb left to right. When a window shifts one
seat, which character leaves at the high-power end, and which enters at the
low-power end?

### Hint 3

Rolling from the right edge of the string toward the left makes every update
drop one fully-powered term and append one constant term — no negative
powers, one multiply, one add.

### Hint 4

The window you must report is the earliest match. If you scan windows from
right to left, how do you make sure the leftmost hit is the one that
survives?
