# Name That Five-Card Hand

## Description

You are holding five cards. The `i`th card carries rank `ranks[i]` and
suit `suits[i]` (ranks as integers, suits as letters).

Judge the hand against these categories, listed from strongest down:

- `"Flush"` — all five cards share one suit.
- `"Three of a Kind"` — some rank appears on three (or more) of the
  cards.
- `"Pair"` — some rank appears on exactly two cards.
- `"High Card"` — none of the above applies.

Answer with the strongest category the hand satisfies. Answers are
case-sensitive: return exactly the strings shown above.

### Example 1

```text
Input: ranks = [7,3,11,6,2], suits = ["c","c","c","c","c"]
Output: "Flush"
Explanation: Every card carries suit "c", so the hand is a "Flush" — the
strongest category, even though the ranks are all distinct.
```

### Example 2

```text
Input: ranks = [8,8,8,4,1], suits = ["a","b","c","d","a"]
Output: "Three of a Kind"
Explanation: The rank 8 appears three times, which makes a
"Three of a Kind". The suits differ, so no "Flush" is available.
```

### Example 3

```text
Input: ranks = [6,6,13,4,9], suits = ["a","b","c","d","b"]
Output: "Pair"
Explanation: Only the two 6s match — a single "Pair" — and no stronger
category fits.
```

### Example 4

```text
Input: ranks = [2,5,7,9,12], suits = ["a","b","c","d","a"]
Output: "High Card"
Explanation: All five ranks are distinct and the suits are mixed, so the
hand is a "High Card".
```

### Constraints

- `ranks.length == suits.length == 5`
- `1 <= ranks[i] <= 13`
- `'a' <= suits[i] <= 'd'`
- No two cards share both the same rank and the same suit.

## Hints

### Hint 1

Test the categories from strongest to weakest and stop at the first one
that holds — a single pass counting ranks plus one suit comparison per
card is enough.
