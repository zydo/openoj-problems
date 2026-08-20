# Largest Odd-Even Frequency Gap

## Description

You are given a string `s` of digits and an integer `k`.

A window is a contiguous substring of `s` with length at least `k`. Inside a
window, call `a` and `b` a legal pair of digits when `a` occurs an odd number
of times in the window and `b` occurs a positive even number of times. The
window's gap for that pair is `count(a) - count(b)`.

Return the largest gap over every window and every legal pair in it.

A window may contain digits other than `a` and `b`; they simply do not take
part in the pair being scored.

### Example 1

```text
Input: s = "20441", k = 5
Output: -1
Explanation: The length of `s` is 5, so the whole string is the only window.
The digit '4' occurs twice — the one even count — and '2', '0' and '1' occur
once each, so the best gap is 1 - 2 = -1.
```

### Example 2

```text
Input: s = "3333311", k = 3
Output: 3
Explanation: The window "3333311" holds five '3's and two '1's, giving
5 - 2 = 3. Note that the run "33333" on its own admits no legal pair at all:
no digit in it occurs an even number of times.
```

### Example 3

```text
Input: s = "333331131", k = 7
Output: 3
Explanation: The whole string contains six '3's — an even count — so '3'
cannot serve as the odd side there. Stopping after the first seven
characters keeps five '3's against two '1's, for 5 - 2 = 3.
```

### Constraints

- `3 <= s.length <= 3 * 10⁴`
- `s` consists only of the digits `'0'` through `'4'`.
- `1 <= k <= s.length`
- Some window of `s` contains one digit occurring an even number of times
  and another occurring an odd number of times.

## Hints

### Hint 1

Decide first which two digits play the odd role and the even role. The
alphabet is five digits wide, so only twenty ordered pairs exist.

### Hint 2

With a pair fixed, prefix counts turn each window's gap into a difference of
two prefix values, and the odd/even requirements into conditions on how the
two parities changed between the window's ends.

### Hint 3

Both the minimum length and the requirement that the even-side digit actually
appears translate into one upper limit on the left boundary, and that limit
never decreases as the right boundary advances. What single table then
answers every query?
