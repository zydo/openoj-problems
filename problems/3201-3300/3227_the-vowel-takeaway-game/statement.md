# The Vowel Takeaway Game

## Description

Alice and Bob take turns dismantling a string `s`, and Alice moves
first. The two sides play by different rules:

- Alice must erase a non-empty piece of the current string that holds
  an odd number of vowels.
- Bob must erase a non-empty piece of the current string that holds an
  even number of vowels.

A piece can be any consecutive run of characters, and the vowels are
exactly `a`, `e`, `i`, `o`, and `u`. Whoever faces a turn with no legal
erasure available loses.

With both sides playing perfectly, return `true` when Alice is
guaranteed the win and `false` otherwise.

### Example 1

```text
Input: s = "cat"
Output: true
Explanation: The whole string holds a single vowel, so Alice erases
all of "cat" on her first turn. Bob then faces an empty string with no
even-vowel piece to remove and loses.
```

### Example 2

```text
Input: s = "rhythm"
Output: false
Explanation: Not one character is a vowel, so every possible piece
holds zero vowels — an even count. Alice can never make her first
move and loses immediately.
```

### Example 3

```text
Input: s = "seat"
Output: true
Explanation: The string holds two vowels. Alice erases the piece "se",
which contains exactly one, leaving "at". Whatever even-vowel piece Bob
removes, at least one vowel survives, and Alice can always clear the
remainder with one final odd-vowel erasure.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` contains only lowercase English letters.

## Hints

### Hint 1

A string with no vowels at all is a lost cause for Alice: every piece
holds an even count, so she can never move.

### Hint 2

When the total vowel count is odd, Alice simply erases the entire
string on her first turn.

### Hint 3

When the count is even but nonzero, have Alice erase a piece holding
just one vowel; Bob's erasures never change the fact that a vowel
remains for Alice to finish with.
