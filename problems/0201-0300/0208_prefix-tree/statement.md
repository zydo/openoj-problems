# Prefix Tree

## Description

Build a container for a growing set of lowercase words in which the cost of
every operation depends on the word at hand, never on how many words are
stored. Store each word as a path through a tree of characters — words that
begin the same way share the nodes for that beginning.

Implement the `PrefixTree` class:

- `PrefixTree()` — start with an empty tree.
- `void insert(String word)` — add `word` to the set.
- `boolean search(String word)` — return `true` exactly if `word` was
  previously added as a whole word.
- `boolean hasPrefix(String prefix)` — return `true` if some added word
  begins with `prefix`.

### Example 1

```text
Input:
["PrefixTree", "insert", "search", "search", "hasPrefix", "insert", "search", "hasPrefix"]
[[], ["train"], ["train"], ["tra"], ["tra"], ["trap"], ["trap"], ["trains"]]
Output: [null, null, true, false, true, null, true, false]
Explanation:
PrefixTree tree = new PrefixTree();
tree.insert("train");
tree.search("train");     // true — added as a whole word
tree.search("tra");       // false — only the beginning of "train"
tree.hasPrefix("tra");    // true — "train" begins with it
tree.insert("trap");      // shares the t-r-a path with "train"
tree.search("trap");      // true
tree.hasPrefix("trains"); // false — no word runs that far
```

### Example 2

```text
Input:
["PrefixTree", "insert", "insert", "search", "hasPrefix", "search", "hasPrefix", "hasPrefix"]
[[], ["oak"], ["oakum"], ["oak"], ["oa"], ["oaku"], ["oakum"], ["oakums"]]
Output: [null, null, null, true, true, false, true, false]
Explanation:
"oak" is a whole word and simultaneously the beginning of "oakum". Both
queries about it answer true, while the half-finished "oaku" is a path in
the tree but not a whole word.
```

### Constraints

- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` use lowercase English letters only.
- No more than `3 * 10⁴` calls to `insert`, `search`, and `hasPrefix` in
  total.

### Follow-up

A hash set matches `search` in comparable time. Which of the three
operations would force a hash set to inspect every stored word, and what is
it about the tree layout that spares the prefix tree that scan?

## Hints

### Hint 1

Lay each word out as one node per character, branching where spellings
diverge, so a shared beginning is stored once. Because the alphabet has 26
letters, a node can hold a fixed array of 26 child slots and locate the
child for a letter by its offset from `a` — a constant-time step.

### Hint 2

`search` and `hasPrefix` make the same walk and differ only in what counts
as success at the end of it. Give every node a flag meaning "a complete word
stops here"; the walk for `search` must end on a flagged node, while the
walk for `hasPrefix` succeeds as soon as it ends anywhere.

### Hint 3

A walk that hits an empty child slot has left the tree — the answer is false
for either query, and no further checking helps. Only `insert` ever creates
nodes, and it does so at the moment a missing child is first needed.
