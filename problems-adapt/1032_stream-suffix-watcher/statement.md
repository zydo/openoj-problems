# Stream Suffix Watcher

## Description

Characters arrive one at a time, forming an ever-growing text. You are also
given a fixed set of lowercase words. After each arriving character, decide
whether the text now **ends with** one of those words.

For instance, with the set `["ink","pen"]`, the characters `t`, `h`, `i`, `n`,
`k` produce the answers `false, false, false, false, true`: after the last one
the text reads `think`, whose ending `ink` belongs to the set.

Implement the `SuffixWatcher` class:

- `SuffixWatcher(String[] words)` — fix the set of words to watch for.
- `boolean feed(char letter)` — append `letter` to the text and return `true`
  when some non-empty ending of the text is one of the words.

### Example 1

```text
Input:
["SuffixWatcher", "feed", "feed", "feed", "feed", "feed"]
[[["moo", "on"]], ["m"], ["o"], ["o"], ["n"], ["s"]]
Output: [null, false, false, true, true, false]
Explanation:
SuffixWatcher watcher = new SuffixWatcher(["moo", "on"]);
watcher.feed("m"); // false — the text is "m"
watcher.feed("o"); // false — "mo" ends in neither word
watcher.feed("o"); // true  — "moo" ends in "moo"
watcher.feed("n"); // true  — "moon" ends in "on"
watcher.feed("s"); // false — "moons" ends in neither
```

### Example 2

```text
Input:
["SuffixWatcher", "feed", "feed", "feed", "feed", "feed", "feed"]
[[["cat"]], ["c"], ["a"], ["r"], ["c"], ["a"], ["t"]]
Output: [null, false, false, false, false, false, true]
Explanation:
The first two characters start spelling "cat", but the "r" ruins that attempt.
A second attempt begins at the fourth character and completes on the sixth,
where the text "carcat" ends with "cat".
```

### Constraints

- The word set holds 1 to 2000 words.
- A word is 1 to 200 characters long.
- Words and fed characters are lowercase English letters.
- `feed` is called at most `4 * 10⁴` times.

## Hints

### Hint 1

A word can have begun at any earlier point in the text, so the state worth
keeping is: for each position where a word might still be under way, how far
that attempt has got. Arrange the word set as a character tree and "how far"
becomes "which node".

### Hint 2

Hold the set of tree nodes the live attempts sit on. An arriving letter moves
each of them along the edge with that label, discarding any attempt whose node
has no such edge, and the tree's start node joins the set so a brand-new
attempt begins at the current character.

### Hint 3

Report `true` when any node just arrived at is marked as the end of a word. A
discarded attempt can never be revived — it has already disagreed with every
word — so the set never grows beyond the length of the longest word.
