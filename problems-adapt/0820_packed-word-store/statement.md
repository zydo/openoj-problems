# Packed Word Store

## Description

Pack `words` into a single string called the *store*, whose last character is
`'#'`. A word can be read out of the store at position `p` when the characters
running from `p` up to the first `'#'` at or after `p` spell that word exactly.
Every entry of `words` has to be readable somewhere; two equal entries are
allowed to be read from the same position.

Return the smallest possible length of such a store.

### Example 1

```text
Input: words = ["planet","net","ban","an"]
Output: 11
Explanation: The store "planet#ban#" serves all four. Reading from position 0
gives "planet" and from position 3 gives "net"; "ban" starts at position 7 and
"an" at position 8.
```

### Example 2

```text
Input: words = ["fox","fox","ox"]
Output: 4
Explanation: "fox#" is enough. Both copies of "fox" are read from position 0,
and "ox" from position 1.
```

### Example 3

```text
Input: words = ["kiwi","plum","fig"]
Output: 14
Explanation: No entry finishes with another one, so none can be tucked inside
its neighbour: "kiwi#plum#fig#" costs 5 + 5 + 4.
```

### Constraints

- `words` holds at least 1 and at most 2000 entries.
- Each entry has between 1 and 7 characters.
- Every character is a lowercase English letter.

## Hints

### Hint 1

Reading may begin partway through a stored word, so a word costs nothing extra
whenever some other stored word finishes with it.

### Hint 2

Throw away every word that is a *proper* suffix of another word — proper
matters, or two identical words would delete each other. Whatever is left pays
its own length plus one character for the `'#'` that closes it.

### Hint 3

"Finishes with" becomes "starts with" once the words are reversed, and a trie
answers the reversed question for all of them in a single pass.
