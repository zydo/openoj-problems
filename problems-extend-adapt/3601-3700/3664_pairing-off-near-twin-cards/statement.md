# Pairing Off Near-Twin Cards

## Description

You are dealt a deck — an array `cards` in which every card shows two
lowercase letters — along with a letter `x`.

Play proceeds in turns, and each completed turn earns one point. On a turn
you must pick two compatible cards that each contain the letter `x`
somewhere, take both out of the deck, and score the point. When no
compatible pair containing `x` remains, the game is over.

Two cards are compatible exactly when their two-letter strings disagree in
precisely one position.

Return the largest number of points achievable with optimal play.

### Example 1

```text
Input: cards = ["aa","ab","ca","bb"], x = "a"
Output: 1
Explanation: The "bb" never plays, since it holds no 'a'. Among the rest,
"ab" and "ca" disagree in both positions, but pairing "aa" with either one
differs in exactly one position — say "aa" with "ab". One point, and no
compatible pair is left.
```

### Example 2

```text
Input: cards = ["ab","ab"], x = "a"
Output: 0
Explanation: Both cards hold an 'a', but the strings are identical — they
differ in no position at all, so no turn can ever be taken.
```

### Example 3

```text
Input: cards = ["aa","ab","ba","ca","ac"], x = "a"
Output: 2
Explanation: Remove "ab" and "ac" first, which differ only at the second
position; then pair "ca" with "aa", which differ only at the first. Two
points, and the lone "ba" has no partner left.
```

### Constraints

- `2 <= cards.length <= 10⁵`
- `cards[i].length == 2`
- Each `cards[i]` consists of lowercase English letters from `'a'` to `'j'`.
- `x` is a lowercase English letter from `'a'` to `'j'`.

## Hints

### Hint 1

Only cards that contain `x` can ever take part — sort the rest out and
file the playable ones by shape: the letter in both positions, in the
first position only (grouped by the other letter), or in the second
position only.

### Hint 2

On a single side, two cards pair precisely when their non-`x` letters
differ; a both-position card pairs with any one-sided card; two
both-position cards never pair. So a side holding class counts `cnt` plus
a few both-position helpers resolves by a formula: balance the classes and
compare the total against the largest class.

### Hint 3

Every both-position card gets spent on one side or the other. Try each
split — `i` helpers to the first side and the rest to the second — and
return the best combined total.
