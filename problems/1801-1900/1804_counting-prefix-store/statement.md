# Counting Prefix Store

## Description

A prefix store holds a multiset of words and answers two kinds of
counter queries: how many stored copies match a word exactly, and how
many stored words begin with a given prefix. Erasing removes one copy.

Implement the `PrefixStore` class:

- `PrefixStore()` initializes the empty store.
- `void insert(String word)` stores one copy of the string `word`.
- `int countExact(String word)` returns how many stored copies equal
  `word`.
- `int countPrefixed(String prefix)` returns how many stored words start
  with the string `prefix`.
- `void erase(String word)` removes one stored copy of `word`.

### Example 1

```text
Input:
["PrefixStore", "insert", "insert", "countExact", "countPrefixed", "erase", "countExact", "countPrefixed", "erase", "countPrefixed"]
[[], ["cabin"], ["cabin"], ["cabin"], ["cab"], ["cabin"], ["cabin"], ["cab"], ["cabin"], ["cab"]]
Output: [null, null, null, 2, 2, null, 1, 1, null, 0]
Explanation:
PrefixStore store = new PrefixStore();
store.insert("cabin");          // Stores "cabin".
store.insert("cabin");          // Stores a second copy of "cabin".
store.countExact("cabin");      // Two copies are stored, so return 2.
store.countPrefixed("cab");     // Both stored words start with "cab", so return 2.
store.erase("cabin");           // Removes one copy of "cabin".
store.countExact("cabin");      // One copy remains, so return 1.
store.countPrefixed("cab");     // return 1
store.erase("cabin");           // Removes the last copy of "cabin".
store.countPrefixed("cab");     // The store is empty now, so return 0.
```

### Example 2

```text
Input:
["PrefixStore", "insert", "insert", "countExact", "countPrefixed"]
[[], ["crowd"], ["crown"], ["crow"], ["crow"]]
Output: [null, null, null, 0, 2]
Explanation: Neither stored word equals "crow", so the exact count is 0,
yet both begin with "crow", so the prefix count is 2.
```

### Constraints

- `1 <= word.length, prefix.length <= 2000`
- `word` and `prefix` consist only of lowercase English letters.
- At most `3 * 10⁴` calls in total are made to `insert`, `countExact`,
  `countPrefixed`, and `erase`.
- Every `erase` call names a word that has at least one stored copy at
  that moment.

## Hints

### Hint 1

Walk shared character paths so one structure answers both queries;
counting copies then costs no extra time.

### Hint 2

Keep two counters on each path node: words ending here, and words
passing through here. Erase can simply walk the path a second time and
decrement — a node left at zero misleads no query.
