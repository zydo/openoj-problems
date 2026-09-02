# The Word Duel

## Description

Alice and Bob each hold a list of words — `a` for Alice and `b` for Bob —
and both lists arrive sorted in lexicographically increasing order.

They duel by taking turns, with Alice moving first. The player on turn
must put down one word from their own list that closely outranks the word
just played. A word `w` closely outranks a word `z` when:

- `w` is lexicographically greater than `z`, and
- the first letter of `w` equals the first letter of `z`, or is exactly
  the letter that follows it in the alphabet.

For instance, "ember" closely outranks "dock" and "door", but it neither
outranks "arch" — its first letter sits too far ahead — nor "elk", which
is not greater at all.

A player who cannot put down a legal word on their turn loses the duel.

Alice is forced to open with her lexicographically smallest word. Return
`true` if she still wins the duel when both sides play flawlessly, and
`false` otherwise.

A word `s` is lexicographically greater than a word `t` when, at the first
position where the two differ, `s` carries a later alphabet letter than
`t` does. If one is a prefix of the other, the longer word is the greater
one.

### Example 1

```text
Input: a = ["net"], b = ["arch"]
Output: true
Explanation: Alice opens with her only word, "net". To reply, Bob would
need a word greater than "net" beginning with 'n' or 'o', but his single
word starts with 'a'. Bob is stuck, so Alice wins the duel.
```

### Example 2

```text
Input: a = ["gold"], b = ["goose"]
Output: false
Explanation: Alice must open with "gold". Bob answers with "goose", which
shares the first letter and sorts greater. Alice then has nothing that
outranks "goose", so she loses.
```

### Example 3

```text
Input: a = ["razor", "silo"], b = ["rift", "sage", "tofu"]
Output: false
Explanation: Alice opens with "razor". Whatever Bob enters the letter r
with — "rift" or "sage" — Alice can only answer "silo", and Bob then exits
to "tofu" in the next letter. Alice has no 't' or 'u' word and loses. Bob
wins with careful play.
```

### Constraints

- `1 <= a.length, b.length <= 10⁵`
- every word in `a` and `b` consists only of lowercase English letters
- `a` and `b` are given in lexicographically increasing order
- no word repeats, and no word appears in both lists
- the combined length of all words in `a` and `b` is at most `10⁶`

## Hints

### Hint 1

Whether a reply may switch letters is decided by first letters alone;
within one letter, any strictly greater word is fair game.

### Hint 2

After a player spends their biggest word of some letter, every later play
outranks it, so that letter is closed to them forever — each letter above
the opening one hosts at most a single exchange.

### Hint 3

Sweep the alphabet from `z` down to `a`, deciding for each letter whether
the player who enters it with their largest word there wins. Alice's
opener is forced, so only Bob's two answers to it need evaluating.
