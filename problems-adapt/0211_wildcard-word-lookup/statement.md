# Wildcard Word Lookup

## Description

Maintain a set of lowercase words that grows over time and can be queried
with patterns: a query matches a stored word when the two are the same
length and agree at every position where the query has a letter. A query may
also contain dots `'.'`, and a dot stands for any single letter.

Implement the `WordMatcher` class:

- `WordMatcher()` — start with an empty set.
- `void add(String word)` — record `word`; later queries can match it.
- `boolean search(String word)` — return `true` if some recorded word
  matches the pattern `word`, otherwise `false`.

### Example 1

```text
Input:
["WordMatcher", "add", "add", "add", "search", "search", "search", "search", "search"]
[[], ["sand"], ["send"], ["song"], ["sand"], ["sung"], [".and"], ["s..g"], ["se.d"]]
Output: [null, null, null, null, true, false, true, true, true]
Explanation:
WordMatcher matcher = new WordMatcher();
matcher.add("sand");
matcher.add("send");
matcher.add("song");
matcher.search("sand"); // true — recorded exactly
matcher.search("sung"); // false — s-n-g path never stored
matcher.search(".and"); // true — the dot takes the s of "sand"
matcher.search("s..g"); // true — s, two dots, g: "song" fits
matcher.search("se.d"); // true — "send" fits
```

### Example 2

```text
Input:
["WordMatcher", "add", "add", "search", "search", "search", "search"]
[[], ["coal"], ["coat"], [".oat"], ["coa."], ["coal."], ["x.oa"]]
Output: [null, null, null, true, true, false, false]
Explanation:
"coal" and "coat" differ only at the end, so both ".oat" (dot over the c)
and "coa." (dot over l or t) match. "coal." is five letters long and no
recorded word is, and "x.oa" demands an x in front, which nothing has.
```

### Constraints

- `1 <= word.length <= 25`, for `add` and for `search`.
- Words given to `add` consist of lowercase English letters.
- Patterns given to `search` consist of `'.'` and lowercase English letters.
- A single `search` pattern carries at most `2` dots.
- At most `10⁴` calls to `add` and `search` in total.

## Hints

### Hint 1

With no dots, a hash set would settle each query instantly; a dot, however,
stands for 26 different letters at once, and enumerating whole words to
resolve it scales with the size of the set. Store the words as a tree of
characters instead, so following a pattern looks like following a path.

### Hint 2

Where the pattern has a letter, exactly one child slot can continue the
match. Where it has a dot, every occupied child slot is a candidate, and the
query succeeds if any of those continuations succeeds — a fork, explored
recursively, that stops succeeding the moment a slot is empty.

### Hint 3

The fan-out stays tame because of the limits: at most two dots per query and
length at most 25, so at most `26²` forks can ever open, and each dies at
the first missing node. A branch that reaches the pattern's end still needs
the whole-word flag on its final node to report a match.
